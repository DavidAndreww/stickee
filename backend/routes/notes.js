const express = require('express')
const router = express.Router();
const { getNotes } = require('../controllers/notes')

router.get('/', getNotes)

module.exports = router;