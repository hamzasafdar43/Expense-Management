const express = require("express")
const { registerController, loginController } = require("../controller/userController")
const router  = express.Router()

// Register Route
router.post("/register" , registerController)

// Login Route
router.post("/login" , loginController)


module.exports = router