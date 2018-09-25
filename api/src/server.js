import express from 'express';
import bodyParser from 'body-parser';
import graphqlMiddleware from './middleware/graphql';
import authMiddleware from './middleware/auth';
import { PORT } from './config';
import db from './db';

db.start();

const app = express();

app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session);
app.use(authMiddleware);

app.use((req, res, next) => {
  next();
});
// app.use(cors(corsOptions));
// app.use(
//   apolloUploadExpress({
//     uploadDir: constants.tmpPath,
//   }),
// );
graphqlMiddleware(app);

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else console.log(`API listening at localhost:${PORT}`);
});
