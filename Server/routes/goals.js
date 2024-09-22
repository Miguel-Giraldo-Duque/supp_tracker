const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require("uuid")
const { newGoal } = require("../controllers/goals")


router.post("/newGoal" , newGoal)


 module.exports = router