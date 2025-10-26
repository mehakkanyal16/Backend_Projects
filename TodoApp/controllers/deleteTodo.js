const Todo=require("../Models/Todo");
const deleteTodo=async(req,res)=>{
    const {id}=req.params;
    try{
        const todo=await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({

                success:false,
                message:"Todo not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Todo deleted successfully"
            
        })
    }catch(err){
        res.status(500).json({

            success:false,

            message:"Failed to delete todo",
            error:err.message
        })

    }
}
module.exports={deleteTodo};