import { combineReducers } from "redux";

const user_id = (state = 1, action) => {
  switch (action.type) {
    case "LOG_USER_ID":
      console.log('ID STORED IN STATE: ', action.value)
      return (state = action.value);
    default:
      return state;
  }
};

export default combineReducers({ user_id });
