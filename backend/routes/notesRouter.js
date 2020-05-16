const express = require('express')
const router = express.Router();
const { getNotes, addNotes, deleteNotes } = require('../controllers/notesController')
const { authenticate } = require('../middleware/index')

router.get('/:id', authenticate, getNotes)

router.post('/add', addNotes)

router.delete('/', deleteNotes)

module.exports = router;