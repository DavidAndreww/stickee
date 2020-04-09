const express = require('express')
const router = express.Router();
const { getNotes, addNotes, deleteNotes } = require('../controllers/notesController')

router.route('/')
.get(getNotes)

router.route('/:id')
.post(addNotes)
//may need new route here?
.delete(deleteNotes)

module.exports = router;