import fs from 'fs';

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
