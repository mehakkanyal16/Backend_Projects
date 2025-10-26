const express=  require("express");
const router=express.Router();

//Importing 
const {addComment}=require("../controllers/commentController");
const {createPost ,getAllPosts,deletePost}=require("../controllers/postController");
const {likePost ,unlikePost}=require("../controllers/likeController");



//Mapping Controllers
router.post("/addComment",addComment);
router.post("/createPost",createPost);
router.get("/getAllPosts",getAllPosts);
router.post("/likePost",likePost);
router.post("/unlikePost",unlikePost);
router.delete("/deletePost",deletePost);
//exporting router
module.exports=router;
