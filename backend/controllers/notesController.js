const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// @desc    gets all stickee note entries
// @route   POST /stickee
const getNotes = (req, res, next) => {
  let { user_id } = req.body;

  pool.query(
    "SELECT note_id, note_message, note_type FROM notes WHERE notes.user_id = " +
      user_id,
    (err, results) => {
      if (err) return handleSQLError(res, err);
      let localNoteId =
        results.length > 0 ? results[results.length - 1].note_id + 1 : 1;
      return res.status(201).json({
        results: results,
        note_id: localNoteId,
      });
    }
  );
};

// @desc    adds new stickee note
// @route    POST /stickee/add
const addNotes = (req, res, next) => {
  const { user_id, note_id, note_message, note_type } = req.body.newNote;
  
  pool.query(
    "INSERT INTO notes (user_id, note_id, note_message, note_type) VALUES (" + user_id + ", " + note_id + ", '" + note_message + "', '" + note_type +"')",
    (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.status(201).json({
        results: results.insertId
      });
    }
  );
};

// @desc    deletes stickee note
// @route   DELETE /stickee
const deleteNotes = (req, res, next) => {
  let { note_id, user_id } = req.body;

  pool.query(
    "DELETE FROM notes WHERE user_id = " + user_id + " && note_id = " + note_id,
    (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.status(201).json({
        results: results,
      });
    }
  );
  // do I also need to do another query to get the updated results to reload the frontend?
};

module.exports = { getNotes, addNotes, deleteNotes };
