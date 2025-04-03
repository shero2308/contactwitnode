const express = require("express");
const { RegisterUser, LoginUser, CurrentUser } = require("../controllers/usersController");

const router = express.Router();

router.get("/register",RegisterUser)

router.get("/login",LoginUser)

router.get("/current",CurrentUser)

module.exports = router;