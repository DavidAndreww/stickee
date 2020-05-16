const setUserId = (user_id) => {
  return {
    type: "SET_USER_ID",
    value: user_id,
  };
};

const setNoteId = (note_id) => {
  return {
    type: "SET_NOTE_ID",
    value: note_id,
  };
};

const getNotes = (notes) => {
  return {
    type: "GET_NOTES",
    value: notes,
  };
};

const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    value: note,
  };
};

const deleteNote = (note_id) => {
  return {
    type: "DELETE_NOTE",
    value: note_id,
  };
};

const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export { setUserId, setNoteId, getNotes, addNote, deleteNote, logIn, logOut };
