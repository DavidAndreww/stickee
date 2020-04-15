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

const isNewUser = (state = false, action) => {
  switch(action.type){
    case 'TOGGLE':
      let toggleView = !state;
      return state = toggleView;
      default: 
      return state;
  }
}

export default combineReducers({ notes, isNewUser });
