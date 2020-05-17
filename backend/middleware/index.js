const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  // token is equal to token value in request header key titled authorization
<<<<<<< HEAD
  const token = req.headers.Authorization;
  console.log(token.blue)
=======
  const token = req.headers.authorization;
  console.log('new Token',token.blue)
>>>>>>> localMaster
  try {
    let decoded = jwt.verify(token, "secret");
    console.log('Validated:', decoded)
    req.user = decoded
    return next();
  } catch {
    res.send("Not Authorized");
  }
};

module.exports = {
  authenticate
};
