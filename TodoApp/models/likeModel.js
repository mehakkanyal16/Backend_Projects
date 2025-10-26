const mongoose = require('mongoose');

// Define the like schema
const likeSchema = new mongoose.Schema({
 post :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post',
    required:true
         
 },
 user:{
    type:String,
    required:true
 }

});
// Create and export the like model
module.exports = mongoose.model('Like', likeSchema); 