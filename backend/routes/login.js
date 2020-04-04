const express = require("express");
const router = express.Router();
const { getLoginData, newUserSignup } = require("../controllers/login");

router.route("/").get(getLoginData).post(newUserSignup);

module.exports = router;
