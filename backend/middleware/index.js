const jwt = require("jsonwebtoken");
const cookie = require('cookie')

const authenticate = (req, res, next) => {
  // token is equal to token value in request header key titled authorization
  const token = req.headers.authorization
  console.log('new Token:',token)
  try {
    let decoded = jwt.verify(token, "secret");
    console.log('Validated:', decoded)
    req.user = decoded
    return next();
  } catch {
    res.send("1Not Authorized");
  }
};

module.exports = {
  authenticate
};
