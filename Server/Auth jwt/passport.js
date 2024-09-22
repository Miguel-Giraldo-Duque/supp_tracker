const passport = require("passport")


const localStrategy = require("./Strategies/local")
// const JwtStrategy = require("./Strategies/Jwt")
passport.use(localStrategy)
// passport.use(JwtStrategy)

