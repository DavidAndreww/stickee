const { users } = require("../data");
// @desc    verifies login credentials
// @route   GET /
const userLogin = (req, res, next) => {
  const { email, pass } = req.body;
  try {
    let found = users.filter((user) => user.email === email);
    found.length > 0 && res.send("hi");
    found.length === 0 && res.status(200).send("User not available");
    console.log(found);
  } catch (error) {
    throw error;
  }
};

// @desc    adds new user info to db
// @route   POST /
const newUserSignup = (req, res, next) => {
  const userData = { ...req.body };
  const id = users[users.length - 1].id;
  const newUser = { ...userData, _id: id + 1 };
  res.send(newUser);
};

module.exports = { userLogin, newUserSignup };
