const { users } = require("../data");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// @desc    verifies login credentials
// @route   GET /
const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  let user = users.find((user) => user.email === email);
  console.log('userLogin: "/"')
  if (!user) {
    res.status(404).send(`Email "${email}" doesn't exist.`);
    return;
  }
  if (user.password === password) {
    res.status(200).send(`Welcome, ${email}`);
  } else {
    res.status(404).send(`Incorrect password`);
  }
};

// @desc    adds new user info to db
// @route   POST /
const newUserSignup = (req, res, next) => {
  let { email, password } = req.body;
  email = email.split('.').join('')
  console.log(email)
  console.log(password)

  let sql = 'INSERT INTO users (email, _password) VALUES (??, ??)'
  const replacements = ['dbaryoa','123']
  sql = mysql.format(sql, replacements)
  res.json({msg: sql})
  
  

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(201).json({
      message: "User Successfully Created",
      new_user: results,
    });
  });

};

module.exports = { userLogin, newUserSignup };
