const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// User signup controller
const signup=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        // Check if user already exists
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                succuess:false,
                message:"User already exists"
            });
        }
    
        // Hash password
        const hashedPassword=await bcrypt.hash(password,10);

        // Create new user
        const newUser= await userModel.create({
            name,
            email,
            password:hashedPassword,
            role

        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user:newUser
        });
    

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error in signup",
            error:err.message
        })
    }
}
module.exports={signup};