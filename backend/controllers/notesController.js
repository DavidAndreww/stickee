

const toDo = [{msg: 'hi', id: 1}, {msg: 'bye', id: 2}]
const toPlan = [2]
const toDelegate = [3]
const toDelete = [4]


// @desc    gets all stickee note entries
// @route   GET /sticky
const getNotes = (req, res, next) => {
  res.json({toDo, toPlan, toDelegate, toDelete})
};

// @desc    adds new stickee note
// @route    POST /:id
const addNotes = (req, res, next) => {
  // res.send('POST a new stickee')
  res.json(req.body)
}

// @desc    deletes stickee note
// @route   DELETE /:id
const deleteNotes = (req, res, next) => {
  res.send('DELETE a stickee')
}

module.exports = { getNotes, addNotes, deleteNotes }
