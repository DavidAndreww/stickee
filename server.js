const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const colors = require("colors");

dotenv.config({ path: "./backend/config/config.env" });

app.use(express.json());

const notesRouter = require('./backend/routes/notesRouter')
const loginRouter = require('./backend/routes/loginRouter')

app.use('/', loginRouter)
app.use('/stickee', notesRouter)

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(
    `Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
