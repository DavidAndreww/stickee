

const notes = [{id: 1, message: 'wash car', type: 'plan'}, {id: 2, message: 'study Javascript', type: 'do'}]


// @desc    gets all stickee note entries
// @route   GET /sticky
const getNotes = (req, res, next) => {
  res.json({notes})
  // 
};

// @desc    adds new stickee note
// @route    POST /sticky
const addNotes = (req, res, next) => {
  let { newNote } = req.body
  res.json(newNote)
  // add new note to DB
  // return array of all notes in db including new note
}

// @desc    deletes stickee note
// @route   DELETE /sticky
const deleteNotes = (req, res, next) => {
  let { note_id } = req.body;
  res.json({deletedNote: note_id})
  //return array of all notes in DB minus the deleted note
}

module.exports = { getNotes, addNotes, deleteNotes }
