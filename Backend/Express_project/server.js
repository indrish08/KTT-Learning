const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

// app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const logger = (req, res, next) => {
  var logData = `[${new Date().toLocaleString()}] ${req.method} ${req.url}`;
  console.log(logData);
  fs.appendFile("logs.txt", logData + "\n", (err) => {
    if (err) throw err;
  });
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  var ans = Number(req.body.n1) + Number(req.body.n2);
  res.send("The answer is " + ans);
});

app.get("/logs", (req, res) => {
  res.sendFile(path.join(__dirname, "logs.txt"));
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: indrish@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("My name is Indrish. I like to code.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
