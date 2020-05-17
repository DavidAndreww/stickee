const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  // token is equal to token value in request header key titled authorization
  const token = req.headers.authorization.split(' ')[0];
  console.log('new Token:',token.yellow.bold)
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
