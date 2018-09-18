export const helloHandler = (req, res) => {
  res.send('Hello world!');
};

export const deployHandler = (req, res) => {
  const { body, params, file } = req;

  const { project, component } = params;

  res.json({ project, component, file });
};

export default { deployHandler, helloHandler };
