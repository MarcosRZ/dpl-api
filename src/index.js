import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import multer from 'multer';

import { DEFAULT_PORT, APP_NAME } from './config/app.config';
import { deployHandler, helloHandler } from './handlers';

const fileManager = multer({dest: 'uploads/'})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.argv[2] || DEFAULT_PORT;

app.get('/', helloHandler);

app.post('/deploy/:project/:component', fileManager.single('zip'), deployHandler);

app.listen(port, () => {
  console.log(
    colors.green(`[${colors.magenta(APP_NAME)}] up and running at port [${colors.yellow(port)}]!`),
  );
});
