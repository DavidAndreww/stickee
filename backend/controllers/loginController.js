const { users } = require('../data')
// @desc    verifies login credentials
// @route   GET /
const userLogin = (req, res, next) => {
  const { email, pass } = req.body;
  console.log('email: ', email)
  console.log('pass: ', pass)
  res.send(req.body)
}

// @desc    adds new user info to db
// @route   POST /
const newUserSignup = (req, res, next) => {
  const userData = { ...req.body }
  const id = users[users.length - 1].id;
  const newUser = { ...userData, _id: id + 1 }
  res.send(newUser)
}

module.exports = { userLogin, newUserSignup }