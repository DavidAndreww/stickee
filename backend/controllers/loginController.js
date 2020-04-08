const { users } = require("../data");
// @desc    verifies login credentials
// @route   GET /
const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  let user = users.find((user) => user.email === email);
  console.log(user)
  if (!user){
    res.status(404).send(`Email "${email}" doesn't exist.`)
    return;
  }
  if (user.password === password){
    res.status(200).send(`Welcome, ${email}`)
  } else {
    res.status(404).send(`Incorrect password`)
  }
  console.log('hi')

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
