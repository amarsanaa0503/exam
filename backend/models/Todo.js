const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  todoDesc: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  todoCompleted: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
