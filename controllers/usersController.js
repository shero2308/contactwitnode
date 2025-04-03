const asyncHandler = require('express-async-handler');

//@desc Register user
//@route GET /api/users/register
//@access Public

const RegisterUser = asyncHandler(async(req, res) => {
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