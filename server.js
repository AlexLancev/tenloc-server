const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/planes"));

mongoose.connect("mongodb://127.0.0.1:27017/database").then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
