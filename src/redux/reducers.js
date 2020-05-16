import { combineReducers } from "redux";

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOG_OUT":
      return (state = false);
    case "LOG_IN":
      return (state = true);
    default:
      return state;
  }
};

const user_id = (state = 1, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return (state = action.value);
    default:
      return state;
  }
};

const note_id = (state = 1, action) => {
  switch (action.type) {
    case "SET_NOTE_ID":
      console.log("set note id: ", action.value);
      return (state = action.value);
    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch (action.type) {
    case "GET_NOTES":
      console.log(action.value);
      return action.value;
    case "ADD_NOTE":
      return [...state, action.value];
    case "DELETE_NOTE":
      let currentList = [...state];
      let newState = currentList.filter(
        (note) => note.note_id !== action.value
      );
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn, user_id, note_id, notes });
