const mongoose = require('mongoose');

// Define the comment schema
const commentSchema = new mongoose.Schema({
 post :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post',
    required:true
         
 },
 user:{
    type:String,
    required:true
 },
 body:{
    type:String,
    required:true
 }

});
// Create and export the Comment model
module.exports = mongoose.model('Comment', commentSchema); 