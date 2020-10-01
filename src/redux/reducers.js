import { combineReducers } from 'redux'

// used to store cookie once user is logged in and validated
const cookie = (state = null, action) => {
  switch (action.type) {
    case 'SET_COOKIE':
      return action.value
    default:
      return state
  }
}

// truthy falsy value to dynamically render logout button in Header.js
const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOG_OUT':
      return (state = false)
    case 'LOG_IN':
      return (state = true)
    default:
      return state
  }
}

// set after user logs in, used to pull note data during component mounting in StickeeDisplayContainer.js
const user_id = (state = 1, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return (state = action.value)
    default:
      return state
  }
}

// used in AddStickeeFormContainer.js to set proper note_id
const note_id = (state = 1, action) => {
  switch (action.type) {
    case 'SET_NOTE_ID':
      return (state = action.value)
    default:
      return state
  }
}

// updates note state to get, add and delete notes
const notes = (state = [], action) => {
  switch (action.type) {
    case 'GET_NOTES':
      return action.value
    case 'ADD_NOTE':
      return [...state, action.value]
    case 'DELETE_NOTE':
      const currentList = [...state]
      const newState = currentList.filter((note) => note.note_id !== action.value)
      return newState
    default:
      return state
  }
}

export default combineReducers({ loggedIn, user_id, note_id, notes, cookie })
