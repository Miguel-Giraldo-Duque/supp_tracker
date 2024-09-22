const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require("uuid")
const { newTraining } = require("../controllers/trainings")


router.post("/newTraining", newTraining )


module.exports = router