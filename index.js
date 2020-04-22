const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = require("./data/actor.json");

app.get("/api", (req, res) => {
  console.log("api_biasa called");
  res.status(200).json(data);
});

app.get("/api_ribet", (req, res) => {
  console.log("GET api_ribet called");
  // cek dia ngasih header auth sama username ngga
  if (req.headers.authorization && req.query.username) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const username = req.query.username;

    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
      if (!err) {
        // cek auth bener apa salah
        if (decoded.username == username) {
          // cek username nya bener ngga
          res.status(200).json(data);
        } else {
          res.status(401).send("Authorization failed!");
        }
      } else {
        res.status(401).send(err);
      }
    });
  } else {
    res.status(403).send("You are not authorized!");
  }
});

app.post("/api_ribet", (req, res) => {
  console.log("POST api_ribet called");
  // cek dia ngasih header auth, body username sama password ngga
  if (req.headers.authorization && req.body.username && req.body.password) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const username = req.body.username;
    const password = req.body.password;

    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
      if (!err) {
        // cek auth bener apa salah
        if (decoded.username == username && decoded.password == password) {
          // cek username password nya bener ngga
          res.status(200).json(data);
        } else {
          res.status(401).send("Authorization failed!");
        }
      } else {
        res.status(401).send(err);
      }
    });
  } else {
    res.status(403).send("You are not authorized!");
  }
});

app.post("/get-token", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  console.log("created token for", username);
  const token = jwt.sign(
    {
      username: username,
      password: password,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "12h" }
  );

  res.status(200).send(token);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
