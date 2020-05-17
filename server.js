const express = require("express");
const app = express();
const dotenv = require("dotenv");
const notesRouter = require("./backend/routes/notesRouter");
const loginRouter = require("./backend/routes/loginRouter");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

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

<<<<<<< HEAD
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.use("/api/stickee", notesRouter);
app.use("/api/", loginRouter);
=======
const notesRouter = require("./backend/routes/notesRouter");
const loginRouter = require("./backend/routes/loginRouter");

app.use("/stickee", notesRouter);
app.use("/", loginRouter);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("./build"));
// }
// if (process.env.NODE_ENV === "production") {
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
>>>>>>> localMaster

app.listen(PORT, () => {
  console.log(
    `Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
