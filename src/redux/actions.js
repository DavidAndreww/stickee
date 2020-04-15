const logUserId = (user_id) => {
  return {
    type: 'LOG_USER_ID',
    value: user_id,
  };
};

export { logUserId }