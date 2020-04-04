const express = require('express')
const router = express.Router();
const { getNotes } = require('../controllers/notes')

router.route('/')
.get(getNotes)

router.route('/:id')
.post()
//may need new route here?
.delete()

module.exports = router;