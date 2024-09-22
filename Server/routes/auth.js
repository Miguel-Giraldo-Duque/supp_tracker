const express = require("express");
const router = express.Router()
const passport = require("passport")

const { login } = require("../controllers/auth");


console.log("e")
router.post('/login', passport.authenticate("local",{session:false, failWithError: true}), login );



module.exports = router