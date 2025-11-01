const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// User signup controller
const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in signup",
      error: err.message,
    });
  }
};

// User login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const payLoad = {
      email: user.email,
      id: user._id,
      role: user.role,
    };
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const options = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    const userData = {
      name: user.name,
      email: user.email,
      role: user.role,
      password: "", // empty password
      token, // include token inside user
    };

    // res
    //   .status(200)
    //   .cookie("token", token, options)
    //   .json({
    //     success: true,
    //     message: "Login successful",
    //     user: userData, 
    //     token,
    //   });
    res
      .status(200)
      .cookie("token", token, options)
      .json({
        success: true,
        message: "Login successful",
        user: userData, 
        token,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in login",
      error: err.message,
    });
  }
};
module.exports = { signup, login };
