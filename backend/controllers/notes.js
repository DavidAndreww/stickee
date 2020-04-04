

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
// @desc    POST /:id
const addNotes = (req, res, next) => {
  res.send('POST new stickee')
}

module.exports = { getNotes }
