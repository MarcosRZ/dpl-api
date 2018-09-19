import fs from 'fs';
/**
 * Handles deploy requests. It will rename uploaded zipfile
 * @param {*} req 
 * @param {*} res 
 */
const deploy = (req, res) => {
  const { body, params, file } = req;

  file.target = `${file.destination}/${file.originalname}`;
  const { project, component } = params;

  fs.rename(file.path, file.target, err => {
    if (err) throw err;
    res.json({ project, component, file });
  });
};

export default deploy;
