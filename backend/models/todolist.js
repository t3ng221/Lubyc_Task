const ToDoItem = require("../schema/todolist");

const createTodo = async (data) => {
  try {
    const newTodoItem = new ToDoItem(data);
    const createdItem = await newTodoItem.save();
    return createdItem;
  } catch (error) {
    console.error("Error creating todo item:", error);
  }
};

const getTodo = async () => {
  const todos = await ToDoItem.find();
  return todos;
};

module.exports = { createTodo, getTodo };
