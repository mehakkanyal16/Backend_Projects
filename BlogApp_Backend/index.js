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
