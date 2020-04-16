const setUserId = (user_id) => {
  return {
    type: 'SET_USER_ID',
    value: user_id,
  };
};

const getNotes = (notes) => {
  return {
    type: 'GET_NOTES',
    value: notes
  }
}

const deleteNote = (note_id) => {
  return {
    type: "DELETE_NOTE",
    value: note_id
  }
}

export { setUserId, getNotes, deleteNote }