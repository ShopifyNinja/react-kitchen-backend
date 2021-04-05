"use strict";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import schema from "./src/graphql/schema/index.js";
import "./src/mongoose/database.connection.js";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 8000;

// body parser
app.use(bodyParser.json({ extended: true }));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// server port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
