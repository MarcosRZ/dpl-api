export const helloHandler = (req, res) => {
  res.send('Hello world!');
};

export const deployHandler = (req, res) => {
  res.send('deploy!');
};

export default { deployHandler, helloHandler };
