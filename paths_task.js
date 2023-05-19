const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>About Page!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact Page!</h1>");
});
app.listen(3000, function () {
  console.log("Sever listing port 3000... started running....");
});
