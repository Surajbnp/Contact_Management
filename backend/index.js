const express = require("express");

const app = express();

app.use(express.json());

const PORT = 8080;

app.listen(() => {
  console.log(`app is running on ${PORT}`);
});
