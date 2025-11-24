const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");
app.use(cors());

// console.log("env ", process.env.DATABASE_URL);

// mongoose.connect(process.env.DATABASE_URL);
// const db = mongoose.connection;

// db.on("error", (err) => {
// 	console.log(err);
// });

// db.once("open", () => {
// 	console.log("connected to database");
// });

app.use(express.json());

module.exports = app;
