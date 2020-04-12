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

const notes = [{id: 1, message: 'wash car', type: 'plan'}, {id: 2, message: 'study Javascript', type: 'do'}]






// @desc    gets all stickee note entries
// @route   GET /sticky
const getNotes = (req, res, next) => {
  // allows me to update id in local state from db
  let id = notes.length > 0 ? notes[notes.length -1].id : 1

  res.json({notes, id})

  // get all notes for user by their unique ID
  // SELECT * 
  // FROM notes
  // WHERE notes.user_id = 1

  // let sql = 'SELECT * FROM notes WHERE notes.user_id = ??'
  // const replacements = ['dbaryoa','123']
  // sql = mysql.format(sql, replacements)
  // res.json({msg: sql})

  // pool.query(sql, (err, results) => {
  //   if (err) return handleSQLError(res, err);
  //   return res.status(201).json({
  //     message: "User Successfully Created",
  //     new_user: results,
  //   });
  // });
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
