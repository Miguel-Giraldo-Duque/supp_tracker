
const {Strategy, ExtractJwt} = require("passport-jwt")
require("dotenv").config()
const secret = "Mycat"

// Le inidcamos que vamos a extraer el token del header de nuestra solicitud y le pasamos el secret que creamos para los token
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : secret
}
const arr = [
    
]

arr.length
const JwtStrategy = new Strategy(options, (payload, done) =>{

  return done(null , payload)

})

  

module.exports = JwtStrategy