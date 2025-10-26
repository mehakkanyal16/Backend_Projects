<<<<<<< HEAD
const express=require("express");
const app=express();
const dotenv = require("dotenv");
dotenv.config();

const PORT=process.env.PORT || 3000;
app.use(express.json());

const blog=require("./routes/blog");

//mounting
app.use("/api/v1",blog);

//Database Connection
const dbConnect=require("./config/database");
dbConnect();

//Default Route
app.get("/",(req,res)=>{

    res.send("<h1>Welcome to Blog App</h1>");
});
//Listening to server
app.listen(PORT,async()=>{
    console.log(`Server is running on port ${PORT}`);
});
=======
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
const todoRoutes = require("./Routes/todo");
app.use("/api/v1", todoRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Todo App</h1>");
});

// DB connection
const dbConnect = require("./Config/database");
dbConnect();

// Start server

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
    
>>>>>>> 03d21d0 (Add Dockerfile for Todo App)
