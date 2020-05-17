const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./backend/config/config.env" });

app.use(express.json());

const notesRouter = require("./backend/routes/notesRouter");
const loginRouter = require("./backend/routes/loginRouter");

app.use("/", loginRouter);
app.use("/stickee", notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
