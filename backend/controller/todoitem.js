const todomodel = require("../models/todolist");

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await todomodel.createTodo({
      title,
      description,
    });
    console.log(todo);
    res.status(201).json({ message: "Todo Added Successfully", todo });
  } catch (error) {
    console.log(error);
  }
};
const getTodo = async (req, res) => {
  try {
    const getTodos = await todomodel.getTodo();
    res.status(200).json({ message: "Todo Added Successfully", getTodos });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addTodo, getTodo };
