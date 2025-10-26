const Todo = require("../Models/Todo");
const updateTodo = async (req, res) => {
    try{
        const {id}=req.params;
        const{title,description}=req.body;
        const todo=await Todo.findByIdAndUpdate(id, {title,description,updatedAt:Date.now()});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            });
        }       
        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo updated successfully"
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to update todo",
            error:err.message
        })
    }
};
module.exports = {updateTodo};