const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080;
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
