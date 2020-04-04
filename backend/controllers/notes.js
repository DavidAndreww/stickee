const express = require("express");

const toDo = [{msg: 'hi', id: 1}, {msg: 'bye', id: 2}]
const toPlan = [2]
const toDelegate = [3]
const toDelete = [4]

const getNotes = (req, res, next) => {
  res.json({toDo, toPlan, toDelegate, toDelete})
};

module.exports = { getNotes }
