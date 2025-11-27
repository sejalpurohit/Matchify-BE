const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/usersRouter");

const ENV = process.env.NODE_ENV || "local";

require("dotenv").config({ path: `${__dirname}/.env.${ENV}` });

const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log(`connected to ${ENV} database`);
});

app.use(express.json());

app.use("/users", usersRouter);

module.exports = { app, db };
