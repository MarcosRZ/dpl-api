import colors from "colors";
import bodyParser from "body-parser";
import express from "express";
// import graphqlMiddleware from './middleware/graphql';
import configureApolloServer from "./middleware/apollo-server";
import authMiddleware from "./middleware/auth";
import { PORT, API_MOUNTPOINT } from "./config";
import db from "./db";

db.start().then(() => {
  const app = express();

  app.use(bodyParser.json({ limit: "1000mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(authMiddleware);

  const apolloServer = configureApolloServer(
    app,
    { subscriptions: true },
    { path: API_MOUNTPOINT }
  );

  app.listen({ port: PORT }, err => {
    if (err) {
      console.error(colors.red(err));
    } else
      console.log(
        colors.green(
          `🛰️  API listening at localhost:${PORT}${apolloServer.graphqlPath}`
        )
      );
  });
});
