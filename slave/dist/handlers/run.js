"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = require("child_process");

const target = 'test';
const repoURL = 'https://github.com/MarcosRZ/learn-nextjs.git';

const run = (command, params, dir) => new Promise((resolve, reject) => {
  const oldDir = process.cwd();
  process.chdir(dir);
  console.log(dir);
  const child = (0, _child_process.spawn)(command, params);
  child.stdout.on('data', data => {
    console.log(data.toString());
  });
  child.stderr.on('data', data => {
    console.log(data.toString());
  });
  child.on('exit', () => {
    console.log('exit');
    process.chdir(oldDir);
    resolve(true);
  });
});

var _default = async (req, res) => {
  return run('/c/users/marodriguez/Projects/dpl-api/deploy.sh', [], '/c/users/marodriguez/deploy').catch(console.warn);
};

exports.default = _default;