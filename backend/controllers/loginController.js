const { users } = require('../data')
// @desc    verifies login credentials
// @route   GET /
const getLoginData = (req, res, next) => {
  res.send('GET login data')
}

// @desc    adds new user info to db
// @route   POST /
const newUserSignup = (req, res, next) => {
  const userData = { ...req.body }
  let id = users[users.length - 1].id + 1;
  let newUser = { ...userData, _id: id }
  res.send(newUser)
  console.log(users)
  console.log(id)
}

module.exports = { getLoginData, newUserSignup }