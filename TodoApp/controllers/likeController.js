const Post=require("../models/postModel");
const Like=require("../models/likeModel");

// Controller to like a post
const likePost=async (req,res) =>{
   try{

    // 1️⃣ Check if this user already liked this post
    const existingLike = await Like.findOne({ post, user });
    if (existingLike) {
      return res.status(400).json({
        success: false,
        message: "You have already liked this post",
      });
    }
    
    const{ post,user}=req.body;
    const like=new Like({
        post,
        user
    });
    const savedLike=await like.save();
    // update the post with the new like
    const updatedPost=await Post.findByIdAndUpdate(
        post,
        { $push: { likes: savedLike._id } },
        { new: true }
    ).populate("likes").populate("comments");
    res.status(201).json({
        success:true,
        message:"Post liked successfully",
        post:updatedPost
    });


   }catch(err){

    res.status (500).json({
        success:false,  
        message:"Failed to like post",
        error:err.message
    });
   }

}
const unlikePost=async (req,res) =>{
    try{

        const {post, like}=req.body;
        //
        const deletedlike=await Like.findOneAndDelete({post:post,_id:like});
        //update the post to remove the like reference
        const updatedPost=await Post.findByIdAndUpdate(post ,{$pull:{likes:deletedlike._id}},{new:true});
        res.status(200).json({
            success:true,
            message:"Post unliked successfully", 
            post:updatedPost
        });


    }
    catch(err){
        res.status (500).json({
            success:false,  
            message:"Failed to unlike post",
            error:err.message
        });
    }
}
module.exports={likePost ,unlikePost};