const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const {login,signup}=require('../controllers/userController');
const {auth,isStudent,isAdmin}=require('../middlewares/auth.js');

// User signup
router.post('/signup', signup);

// User login
router.post('/login', login);

module.exports = router;

//protected routes: 
router.get('/test',auth,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Protected route accessed",
        user:req.user
    });
})

router.get('/student',auth,isStudent,(req,res)=>{
    res.status(200).json({
        success:true,       
        message:"Student route accessed",
        user:req.user
    });
});

router.get('/admin',auth,isAdmin,(req,res)=>{
    res.status(200).json({
        success:true,       
        message:"Admin route accessed",
        user:req.user
    });
});