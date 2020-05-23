const express = require("express");
const app = express();
const dotenv = require("dotenv");
const notesRouter = require("./backend/routes/notesRouter");
const loginRouter = require("./backend/routes/loginRouter");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

dotenv.config({ path: "./backend/config/config.env" });

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static("build"));


app.use("/stickee", notesRouter);
app.use("/", loginRouter);


app.listen(PORT, () => {
  console.log(
    `Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
