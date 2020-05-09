const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// @desc    verifies login credentials
// @route   POST /
const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  // res.send({email, password})

  pool.query(
    "SELECT * FROM users WHERE email = '" + email + "' ",
    (err, results) => {
      if (err) return handleSQLError(res, err);
      if(!results.length) return res.status(404).json(`User with email "${email}" does not exist.`)
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

  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function(err, hash){
    
    pool.query(
      "INSERT INTO users (email, _password) VALUES ('" +
        email +
        "', '" +
        hash +
        "')",
      (err, results) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') return res.status(409).send(`Email "${email}" is already taken.`)
          return handleSQLError(res, err);
        } 
        return res.status(201).json({
          message: "User Successfully Created",
          new_user: { email: email, password: password, id: results.insertId },
        });
      }
    );
  })


};

module.exports = { userLogin, newUserSignup };
