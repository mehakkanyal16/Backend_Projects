const mongoose=require("mongoose"); //importing mongoose
const todoSchema=new mongoose.Schema({  //defining schema
    title:{
        type:String,
        required:true,
        maxLength:100,
    },
    description:{
        type :String,
        required:true,
        maxLength:500,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now,

    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now,
    },
})
module.exports=mongoose.model("Todo",todoSchema); //exporting the model