const express = require('express')
const router = express.Router();
const { getNotes, addNotes, deleteNotes } = require('../controllers/notesController')

router.get('/:id', getNotes)

router.post('/add', addNotes)

router.delete('/', deleteNotes)

module.exports = router;