const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TodoList = mongoose.model("TodoList", todolistSchema);

module.exports = TodoList;
