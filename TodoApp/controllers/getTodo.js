const Todo = require("../Models/Todo");
const getTodoo = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            response:todos,
            message: "Todos fetched successfully"
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to fetch todos",
            error: err.message
        });


    }
};
const getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo =await Todo.findById(id);
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            });
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo fetched successfully"

        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch todo by id",
            error:err.message
        })
    }
}
module.exports = {getTodoo ,getTodoById};