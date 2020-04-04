// @desc    verifies login credentials
// @route   GET /
const getLoginData = (req, res, next) => {
  res.send('GET login data')
}

// @desc    adds new user info to db
// @route   POST /
const newUserSignup = (req, res, next) => {
  res.send('POST new user data')
}

module.exports = { getLoginData, newUserSignup }