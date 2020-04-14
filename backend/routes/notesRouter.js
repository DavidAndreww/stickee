const express = require('express')
const router = express.Router();
const { getNotes, addNotes, deleteNotes } = require('../controllers/notesController')

router.route('/')
.post(getNotes)

router.route('/')
// .post(addNotes)
.delete(deleteNotes)

module.exports = router;