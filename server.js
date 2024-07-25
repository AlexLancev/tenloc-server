const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const url_api = process.env.URL;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/planes"));

mongoose
  .connect(url_api, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  });
