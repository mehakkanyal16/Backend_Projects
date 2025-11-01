const jwt=require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  // Authentication logic here
  try{
        console.log("==== Incoming Auth Request ====");
    console.log("Cookies:", req.cookies);
    console.log("Authorization Header:", req.header("Authorization"));
    console.log("Body:", req.body);
    const token=req.body.token||req.cookies.token||req.header("Authorization")?.replace("Bearer ","");
    if(!token){
        return res.status(401).json({
            success:false,  
            message:"Unauthorized: No token provided"
        });
    }
    //verify the token 
    try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    console.log("Decoded token:",decoded);
    req.user=decoded;   // Attach user info to request object
    }catch(err){

        return res.status(401).json({
            success:false,
            message:"Unauthorized: Invalid token",
            error:err.message
        });
    }
  }catch(err){
    return res.status(401).json({
        success:false,  
        message:"Unauthorized",
        error:err.message
    });
  }
  next();
};

const isStudent = (req, res, next) => {
  // Authorization logic for student role here
   try{
    if(req.user.role!=='student'){
        return res.status(403).json({
            success:false,  
            message:"Forbidden: Access is denied"
        });
    }   

  }catch(err){
    return res.status(401).json({
        success:false,  
        message:"Unauthorized",
        error:err.message
    });
  }
  next();
};              
const isAdmin = (req, res, next) => {
  // Authorization logic for admin role here
   try{
    if(req.user.role!=='admin'){
        return res.status(403).json({
            success:false,  
            message:"Forbidden: Access is denied"
        });
    }

  }catch(err){
    return res.status(401).json({
        success:false,  
        message:"Unauthorized",
        error:err.message
    });
  }
  next();
};

module.exports = { auth, isStudent, isAdmin };