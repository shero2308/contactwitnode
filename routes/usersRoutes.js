const express = require("express");
const { RegisterUser, LoginUser, CurrentUser } = require("../controllers/usersController");

const router = express.Router();

router.post("/register",RegisterUser)

router.post("/login",LoginUser)

router.get("/current",CurrentUser)

module.exports = router;