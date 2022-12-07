//requring the dependies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const fetch = require("node-fetch");

const app = express();

//usinh the dependies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//using helmet to secure the app
app.use(helmet());

//fetching the api from the following link and posting it
app.post("/", (req, res, next) => {
  fetch(
    `https://itunes.apple.com/search?term=${req.body.search}&entity=${req.body.mediaType}&limit=8`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

// trying to identify all the errors
app.get("*", (req, res, next) => {
  let err = new Error("erorr loading your page");
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
//setting up the port
let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("port 3001 is running");
});
