const { users } = require("../data");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// @desc    verifies login credentials
// @route   GET /
const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  let user = {
    email: email,
    password: password,
  };
  res.json({ message: "Logged in!", user: user });
};

// @desc    adds new user info to db
// @route   POST /signup
const newUserSignup = (req, res, next) => {
  let { email, password } = req.body;

  pool.query(
    "INSERT INTO users (email, _password) VALUES ('" +
      email +
      "', '" +
      password +
      "')",
    (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.status(201).json({
        message: "User Successfully Created",
        new_user: { email: email, password: password, id: results.insertId },
      });
    }
  );
};

module.exports = { userLogin, newUserSignup };
