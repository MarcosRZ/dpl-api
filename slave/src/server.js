import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import multer from 'multer';

import { DEFAULT_PORT, APP_NAME, API_BASE } from './config/app.config';
import { deployHandler, helloHandler, runHandler } from './handlers';

const fileManager = multer({ dest: 'uploads' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.argv[2] || DEFAULT_PORT;
const apiBase = process.argv[3] || API_BASE;

app.get(`${apiBase}/`, helloHandler);
app.get(`${apiBase}/run`, runHandler);

app.post(`${apiBase}/deploy/:project/:app`, fileManager.single('zip'), deployHandler);

app.listen(port, () => {

  const endpoint = `http://localhost:${port}${apiBase}`;

  console.log(
    colors.green(
      `[${colors.magenta(APP_NAME)}] up and running at [${colors.magenta(endpoint)}]!`,
    ),
  );
});
