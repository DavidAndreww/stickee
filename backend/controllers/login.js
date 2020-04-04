// @desc    verifies login credentials
// @route   GET /
const getLoginData = (req, res, next) => {
  res.send('login controller is good')
}

// @desc    adds new user info to db
// @route   POST /
const newUserSignup = (req, res, next) => {
  res.json(req.body)
  console.log('req.body')
}

module.exports = { getLoginData, newUserSignup }