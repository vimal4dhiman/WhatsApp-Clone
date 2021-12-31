import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//Components
import Routes from "./routes/Route.js";
import connection from "./database/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

const PORT = 8000;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
connection(username, password);
app.listen(PORT, () =>
  console.log(`Serve is running successfully on port ${PORT}`)
);
