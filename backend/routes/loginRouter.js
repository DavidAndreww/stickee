const express = require("express");
const router = express.Router();
const { userLogin, newUserSignup } = require("../controllers/loginController");

router.route("/")
.post(userLogin)
.post(newUserSignup);

module.exports = router;
