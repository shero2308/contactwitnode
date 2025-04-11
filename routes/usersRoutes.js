const express = require("express");
const { RegisterUser, LoginUser, CurrentUser } = require("../controllers/usersController");
const ValidateToken = require("../middleware/ValidateTokenHandler");

const router = express.Router();

router.post("/register",RegisterUser)

router.post("/login",LoginUser)

router.get("/current", ValidateToken ,CurrentUser)

module.exports = router;