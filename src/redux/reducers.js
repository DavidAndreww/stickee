import { combineReducers } from "redux";

const notes = (state = [], action) => {
  switch (action.type) {
    case "ADD_STICKEE":
      console.log("ADD_STICKEE REDUCER ");
      return [...state, action.value];
    default:
      return state;
  }
};

export default combineReducers({ notes });
