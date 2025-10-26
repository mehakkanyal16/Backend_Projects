const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const addComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    //  Create and save the comment
    const comment = new Comment({ post, user, body });
    const savedComment = await comment.save();

    //  Push the comment id into the post
    await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    );

    // Re-fetch the updated post and populate comments
    const updatedPost = await Post.findById(post).populate("comments");

    //Send response
    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      post: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to add comment",
      error: err.message,
    });
  }
};

module.exports = { addComment };
