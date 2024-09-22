const express = require("express")
const router = express.Router()
const { newTracker, getByIdTracker, allTrackers } = require("../controllers/tracker")


router.post("/newTracker" , newTracker)


router.get("/trackers" , allTrackers)


router.get("/trackers/:id" , getByIdTracker)



module.exports = router