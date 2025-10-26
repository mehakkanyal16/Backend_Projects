const express = require("express");
const router = express.Router();

// Import controller
const { createTodo } = require("../Controllers/CreateTodo");
const {getTodoo,getTodoById} = require("../Controllers/getTodo");
const {updateTodo}= require("../Controllers/updateTodo");
const {deleteTodo}= require("../Controllers/deleteTodo");


// POST route for creating todo
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodoo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;
