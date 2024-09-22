const jwt = require("jsonwebtoken")
const secret = "Mycat"

const jwtConfigToken = {
    expiresIn: '30s',  
  };
  
const jwtConfig = {
    expiresIn: '1d',  
}
const login = (req, res, next) => {
        try {
            const payload = {
                sub: req.user[0].id,
                role: "user"
            }
            const token = jwt.sign(payload, secret, jwtConfigToken)
            res.cookie("jwt", token, payload, {httpOnly: true , secure: true})
            const RefreshToken = jwt.sign(payload, secret, jwtConfig)
            res.cookie("refreshToken", RefreshToken, jwtConfig, {httpOnly: true , secure: true})
            res.json({ token : token,  user: req.user });
            
        } catch (err) {
            const error = new Error("Fallo la autenticacion revisa tu nombre usuario o contraseña")
            error.status = "fail"
            error.statusCode = 401

            next(error)
        }
      
}

module.exports= {login}