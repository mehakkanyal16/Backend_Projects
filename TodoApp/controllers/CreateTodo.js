const Todo = require("../Models/Todo");

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and Description are required" });
    }

    const todo = await Todo.create({ title, description });
    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: todo,
    });
  } catch (err) {
    console.error("Error creating todo:", err); // <- logs exact error
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { createTodo };
