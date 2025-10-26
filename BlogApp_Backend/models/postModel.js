const mongoose = require('mongoose');

// Define the comment schema
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true   
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'

    }]

});
// Create and export the Post model
module.exports = mongoose.model('Post', postSchema); 