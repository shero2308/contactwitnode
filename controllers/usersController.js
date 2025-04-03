const asyncHandler = require('express-async-handler');
const User = require('../models/UserModels');
const bcrypt = require('bcrypt');

//@desc Register user
//@route POST /api/users/register
//@access Public

const RegisterUser = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    // Create new user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log("User Created:", user);

    if (user) {
        return res.status(201).json({
            _id: user.id,
            email: user.email,
            message: "User registered successfully",
        }); 
    }
    // If user creation fails
    return res.status(400).json({ message: "User data is not valid" });
});

module.exports = { RegisterUser };

//@desc Login user
//@route GET /api/users/login
//@access Public

const LoginUser = asyncHandler(async(req, res) => {
    res.json({message: "login User"})
});

//@desc Current user
//@route GET /api/users/current
//@access Praivate

const CurrentUser = asyncHandler(async(req, res) => {
    res.json({message: "current User"})
});


module.exports = {
    RegisterUser,
    LoginUser,
    CurrentUser
};