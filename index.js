const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = {
  // id: "asd",
  fileId: "asd",
  fileIdName: "asd",
  fileTypeId: "asd",
  fileFormatId: "asd",
  regional: "asd",
  protocolType: 3,
  ip: "asd",
  username: "asd",
  password: "asd",
  port: 21,
  remotePath: ["asd"],
  localPath: "asd",
  processType: "asd",
  processPath: "asd",
  pattern: "asd",
  cron: "asd",
  createdBy: "asd",
  createdDate: "2019-01-01T15:21:13.310+0000",
  active: true,
  collecting: false,
  writeToFile: true,
  defaultFieldValue: '{ "defaultAreaCode" : "021" }',
  fileTypeTransfer: 2,
  logToDB: false,
  logToFile: true,
  isAgregate: false,
  patternForOutput: "",
  specialCondition: "",
  forceRegexInput: "",
  forceRegexTake: "",
  isBypass: "0",
  fileDispatchId: "",
  delimiter: "",
  cacValidation: "",
  cekAnotherSource: "0",
  isRenamed: "0",
  isArchived: "0",
  renameTo: "",
  hdfsPath: "/data/input/hjtn2/",
  lookProcess: "2",
  saveProcess: "2",
  compressInput: "0",
  worker: "211,222,244,311,322,333,344,411,422,433,444",
  _class: "com.os.neta.entities.config.model.FILE_DETAIL_INPUT"
};

app.get("/api", (req, res) => {
  console.log("api_biasa called");
  res.status(200).json(data);
});

app.get("/api_ribet", (req, res) => {
  console.log("api_ribet called");
  // cek dia ngasih header auth sama username ngga
  if (req.headers.authorization && req.query.username) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const username = req.query.username;

    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
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

app.get("/get-token/:username", (req, res) => {
  const username = req.params.username;
  console.log("created token for", username);
  const token = jwt.sign(
    {
      username: username
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).send(token);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
