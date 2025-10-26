const mongoose=require("mongoose");  // import mongoose
require("dotenv").config(); // to load environment variables from .env file
const dbConnect=()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log("error connecting to db ",err);
    }) 
}
module.exports=dbConnect; // export the function to be used in other files