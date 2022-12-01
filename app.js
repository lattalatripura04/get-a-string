const express = require("express");
const app = express();

app.get("/", (request, respond) => {
  response.send("Express JS");
});

module.exports = app;
