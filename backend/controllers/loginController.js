const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// @desc    verifies login credentials
// @route   POST /
const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  pool.query(
    "SELECT * FROM users WHERE email = '" + email + "' ",
    (err, results) => {
      if (err) return handleSQLError(res, err);
      if(!results.length) return res.status(404).send('No matching users')
      return res.status(201).json({
        message: "Logged In",
        user: results,
      });
    }
  );

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
