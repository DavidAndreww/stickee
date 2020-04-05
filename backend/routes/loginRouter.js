const express = require("express");
const router = express.Router();
const { getLoginData, newUserSignup } = require("../controllers/loginController");

router.route("/").get(getLoginData).post(newUserSignup);

module.exports = router;
