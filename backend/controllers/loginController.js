const { users } = require("../data");
const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// @desc    verifies login credentials
// @route   GET /
const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  let user = users.find((user) => user.email === email);
  console.log(user);
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
  console.log("connected: ", req.body);
  let sql = "INSERT INTO ?? ( ??, ??) VALUES (??, ??)";
  const userInput = [
    "users",
    "email",
    "_password",
    `${email}`,
    `${password}`,
  ];
  console.log(sql)
  sql = mysql.format(sql, userInput);
  res.send('sql format: ',sql)

  // pool.query(sql, (err, results) => {
  //   if (err) return handleSQLError(res, err);
  //   return res.status(201).json({
  //     message: "User Successfully Created",
  //     new_user: results,
  //   });
  // });
};

module.exports = { userLogin, newUserSignup };
