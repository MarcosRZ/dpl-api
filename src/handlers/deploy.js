import fs from 'fs-extra';
import targz from 'targz';
import { spawn } from 'child_process';

import dplConfig from '../config/dpl.config';

// See https://www.npmjs.com/package/targz for config (ignore files, compression level...)
const backup = async (src, dest) =>
  new Promise((resolve, reject) => {
    console.log(`Backup [${src}, ${dest}]`);

    const callback = err => {
      if (err) reject(err);
      return resolve(true);
    };

    fs.remove(`${src}/node_modules`).then(() => {
      targz.compress({ src, dest }, callback);
    });
  });

const remove = async target => {
  console.log(`Remove [${target}]`);
  fs.remove(target);
};

const createPath = dir => fs.mkdirp(dir);

const copy = async (file, targetDir) =>
  new Promise((resolve, reject) => {
    const { originalname, location } = file;

    const fullTargetPath = `${targetDir}/${originalname}`;
    console.log(`Copy [${location}, ${fullTargetPath}]`);
    fs.copy(location, fullTargetPath)
      .then(() => resolve(fullTargetPath))
      .catch(err => reject(err));
  });

const unpkg = async (src, dest) => {
  console.log(`Unpackaging [${src}, ${dest}]`);
  const endf = err => {
    if (err) Promise.reject(err);
    return Promise.resolve(true);
  };

  return targz.decompress({ src, dest }, endf);
};

const runScript = (command, params, dir) =>
  new Promise((resolve, reject) => {
    const initialDir = process.cwd();

    process.chdir(dir);
    console.log(`Running script: [${command} ${params.join(' ')}] in [${dir}]`);

    // Notice how your arguments are in an array of strings
    const child = spawn(command, params);

    child.stdout.on('data', data => {
      process.stdout.write(data);
    });

    child.stderr.on('data', data => {
      process.stdout.write(data);
      process.chdir(initialDir);
      reject(data);
    });

    child.on('exit', data => {
      process.stdout.write("I'm done!");
      process.chdir(initialDir);
      resolve(true);
    });
  });

const install = dir => runScript('npm', ['i'], dir);
const up = dir => runScript('npm', ['run', 'prod', '&'], dir);

const execPostScripts = scripts => {
  console.log('Executting post scripts...');
  scripts.forEach(s => {
    console.log(`-> ${s.command} ${s.params.join(' ')}`);
    console.log(spawnSync(s.command, s.params));
  });
};

const summary = (src, dest) => {};

/**
 * Handles deploy requests. It will rename uploaded zipfile
 * @param {*} req
 * @param {*} res
 */
const deploy = async (req, res) => {
  const { params, file } = req;

  const { project: projectName, app: appName } = params;

  console.log(file);

  // Validate params
  if (!projectName || projectName === '')
    throw new Error('Must provide a project name [:project]! Aborting!');
  if (!appName || appName === '') throw new Error('Must provide an app name [:app]! Aborting!');
  if (!file || file.size === 0) throw new Error('Must provide a binary file [zip]! Aborting!');

  // TODO: Maybe validate zip checksum

  const { projects, backups, appsRoot } = dplConfig;

  // Find project in dpl.config.json
  const project = projects.find(p => p.name === projectName);
  if (!project) throw new Error('Project not found in project registry. Aborting!');

  // Find app on project apps
  const app = project.apps.find(a => a.name === appName);
  if (!app) throw new Error('Project not found in project registry. Aborting!');

  file.location = `${file.destination}/${file.originalname}`;

  // Input is OK. Let's deploy...

  const { root: projectRoot } = project;
  const { root: appRoot, postscripts } = app;
  const { location, destination, filename } = file;

  const path = `${destination}/${filename}`;

  console.log(`Rename [${path}, ${location}]`);
  await fs.rename(path, location);

  const discriminator = new Date().getTime();
  const deployTarget = `${appsRoot}${projectRoot}${appRoot}`;
  const backupTarget = `${backups}${appRoot}${discriminator}.tar.gz`;

  // Backup $target (if exists)
  await backup(deployTarget, backupTarget);

  // Delete $target
  // await remove(deployTarget);

  await createPath(deployTarget);

  // Copy zip to $target
  const fileCopy = await copy(file, deployTarget);

  // Unzip in $target
  await unpkg(fileCopy, deployTarget);

  // Exec postscripts
  // execPostScripts(postscripts);

  await install(deployTarget);
  up(deployTarget);

  // Cleanup uploaded & copy

  await remove(fileCopy);
  await remove(location);

  // Log, update versions, etc...
  summary();

  res.json({ result: 'success' });

  // fs.rename(file.path, file.target, err => {
  //   if (err) throw err;
  //   res.json({ project, component, file });
  // });
};

export default deploy;
