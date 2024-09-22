const express = require("express")
const router = express.Router()
const { newUser, getAll } = require("../controllers/user")


router.post("/newUser" , newUser)
router.get("/", getAll)



module.exports = router
