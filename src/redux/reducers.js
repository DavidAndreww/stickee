import { combineReducers } from "redux";

const user_id = (state = 1, action) => {
  switch (action.type) {
    case "LOG_USER_ID":
      console.log("ID STORED IN STATE: ", action.value);
      return (state = action.value);
    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [ ...state, action.value ]
    case "DELETE_NOTE":
      let currentList = [ ...state ]
      let newState = currentList.filter(note => note.note_id !== action.value)
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ user_id, notes });
