const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({ path: "./backend/config/config.env" });

const router = require('./backend/routes/notes')

app.use('/sticky', router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  );
});
