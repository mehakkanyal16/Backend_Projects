const Post=require("../models/postModel");
const Like=require("../models/likeModel");

const createPost=async (req,res) =>{
    try{
        const {title,body}  =req.body;
        const post=new Post({
            title,
            body
        })
        const savedPost=await post.save();
        res.status(201).json({
            success:true,
            message:"Post created successfully",
            post:savedPost
        });


    }catch(err){
        res.status (500).json({
            success:false,  
            message:"Failed to add comment",
            error:err.message
        });
    }
};
const getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("likes").populate("comments");

        res.status(200).json({
            success:true,
            posts:posts
        });
    }catch(err){
        res.status(500).json({

            success:false,
            message:"Failed to fetch posts",
            error:err.message
        });

    }
};
const deletePost=async(req,res)=>{
    try{
        const {postId}=req.body;
        await Post.findByIdAndDelete(postId);
        res.status(200).json({
            success:true,
            message:"Post deleted successfully"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to delete post",
            error:err.message
        });
    }
}
module.exports={createPost,getAllPosts,deletePost};
