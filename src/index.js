import express from 'express';
import colors from 'colors';
import { DEFAULT_PORT, APP_NAME } from './config/app.config';
import { deployHandler, helloHandler } from './handlers';

const app = express();
const port = process.argv[2] || DEFAULT_PORT;

app.get('/', helloHandler);

app.post('/deploy/:project/:component', deployHandler);

app.listen(port, () => {
  console.log(
    colors.green(`[${colors.magenta(APP_NAME)}] up and running at port [${colors.yellow(port)}]!`),
  );
});
