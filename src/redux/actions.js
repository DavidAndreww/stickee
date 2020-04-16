const logUserId = (user_id) => {
  return {
    type: 'LOG_USER_ID',
    value: user_id,
  };
};

const getNotes = (notes) => {
  return {
    type: 'GET_NOTES',
    value: notes
  }
}

export { logUserId, getNotes }