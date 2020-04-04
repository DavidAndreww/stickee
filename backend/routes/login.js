const express = require('express')
const router = express.Router();
const { getLoginData } = require('../controllers/login')

router.get('/', getLoginData)

module.exports = router;