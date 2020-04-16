import { combineReducers } from "redux";

const user_id = (state = 1, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      console.log(action.value)
      return (state = action.value);
    default:
      return state;
  }
};

const note_id = (state = 1, action) => {
  switch(action.type){
    case "SET_NOTE_ID":
      console.log('set note id: ', action.value)
      return state = action.value
      default: 
      return state
  }
}

const notes = (state = [], action) => {
  switch (action.type) {
    case "GET_NOTES":
      console.log(action.value)
      return action.value;
    case "ADD_NOTE":
      return [ ...state, action.value ]
    case "DELETE_NOTE":
      console.log('delete sticky id: ', action.value)
      let currentList = [ ...state ]
      let newState = currentList.filter(note => note.note_id !== action.value)
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ user_id, note_id, notes });
