const express = require("express")
const app = express()
const cors = require("cors")
const passport = require("passport")
const jwt = require("jsonwebtoken")
const port= "3002"
const {localStrategy}= require("./Auth jwt/passport.js")
const cookieParser = require("cookie-parser")
const secret = "Mycat"
const auth = require("./routes/auth.js")
const user = require("./routes/user.js")
const exercies = require("./routes/exercies.js")
const trainings = require("./routes/trainings.js")
const goals = require("./routes/goals.js")
const trackers = require("./routes/trackers.js")




require("./Auth jwt/passport.js") 
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const validateUser =  (req, res, next) =>{
    try {
        const token = req.cookies.jwt
        console.log(token)
        const validCookieToken = jwt.verify(token, secret)
        console.log({validCookieToken})
        next()
        
    } catch (error) {
        console.log("token invalido")
        res.status(401).json({ok: false, message: "invalid Token"})
    }
   

}


app.use("/api/auth", auth  )


app.use("/api/users", user  )
app.use(validateUser)

app.use((err, req, res , next  ) =>{
    err.statusCode = err.statusCode || 500
    err.status= err.status || "error" 
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    })
})

app.use("api/trackers", trackers  )
app.use("api/exercies", exercies  )
app.use("api/goals", goals  )
app.use("api/trainings", trainings  )





app.listen(port, () =>{
    console.log("Server activo en :"+port)
})
