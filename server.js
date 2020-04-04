const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({ path: "./backend/config/config.env" });

const notesRouter = require('./backend/routes/notes')
const loginRouter = require('./backend/routes/login')

app.use('/', loginRouter)
app.use('/sticky', notesRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  );
});
