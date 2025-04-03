const asyncHandler = require('express-async-handler');
const User = require('../models/UserModels');
const bcrypt = require('bcrypt');

//@desc Register user
//@route POST /api/users/register
//@access Public

const RegisterUser = asyncHandler(async(req, res) => {
    const{ username, email, password } = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All Fields are required");
    }
    const UserAvailable = await User.findOne({email});
    if (UserAvailable){
        res.status(400);
        throw new Error("User Already Registered");
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);

    res.json({message: "Register the User"})
});

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