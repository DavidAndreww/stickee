const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");


// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// this doesn't work but I think I need something similar?
// SELECT
// 	user_id,
//     note_id,
//     note_message,
//     note_type
//     FROM notes
//     GROUP BY user_id
//     HAVING user_id = 1



// @desc    gets all stickee note entries
// @route   POST /sticky
const getNotes = (req, res, next) => {
  let { user_id } = req.body;

  pool.query(
    "SELECT note_id, note_message, note_type FROM notes WHERE notes.user_id = " + user_id,
    (err, results) => {
      if (err) return handleSQLError(res, err);
      let localNoteId = results.length > 0 ? results[results.length -1].note_id + 1 : 1
      return res.status(201).json({
        results: results,
        note_id: localNoteId
      });
    }
  );
};

// @desc    adds new stickee note
// @route    POST /sticky
const addNotes = (req, res, next) => {
  let { newNote } = req.body
  res.json(newNote)
  // add new note to DB
  // return array of all notes in db including new note

// user ID needs to be generated somehow....
// INSERT INTO notes (user_id, note_id, note_message, note_type)
// VALUES (1, 3, 'Make artwork', 'do')
}

// @desc    deletes stickee note
// @route   DELETE /sticky
const deleteNotes = (req, res, next) => {
  let { note_id } = req.body;
  res.json({deletedNote: note_id})
  //return array of all notes in DB minus the deleted note


//  DELETE FROM 
// 	notes
// WHERE
// 	user_id = 1 && note_id = 2 

}

module.exports = { getNotes, addNotes, deleteNotes }
