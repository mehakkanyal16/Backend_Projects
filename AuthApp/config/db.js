const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=async(req,res)=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to MongoDB");
    }
    ).catch((err)=>{
        console.log("Error connecting to MongoDB",err);
        console.log(err);
    });
}
module.exports=dbConnect;