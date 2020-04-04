const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./backend/config/config.env" });

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
