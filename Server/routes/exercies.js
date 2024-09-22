const express = require("express")
const { newExercice } = require("../controllers/exercice")
const router = express.Router()



router.post("/newExercice" , newExercice)


 module.exports = router