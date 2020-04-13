const { users } = require("../data");
const mysql = require("mysql");
const pool = require('../sql/connection')
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
  email = email.split(".").join("");
  res.json({
    message: "New user created",
    user: {
      email: req.body.email,
      password: password,
    },
  });

  let sql = 'INSERT INTO users (email, _password) VALUES (??, ??)'
  const replacements = [ `${email}`,'123']
  sql = mysql.format(sql, replacements)
  console.log(sql);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(201).json({
      message: "User Successfully Created",
      new_user: results,
    });
  });
};

module.exports = { userLogin, newUserSignup };
