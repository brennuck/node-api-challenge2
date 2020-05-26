const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("WOOP WOOP");
});

// middleware
server.use(express.json());

module.exports = server;