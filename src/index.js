import express from 'express';
import colors from 'colors';
import CONFIG from './config/app.config';

const app = express();
const port = process.argv[2] || CONFIG.DEFAULT_PORT;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(colors.green(`[${colors.magenta(CONFIG.APP_NAME)}] up and running at port [${colors.yellow(port)}]!`));
});