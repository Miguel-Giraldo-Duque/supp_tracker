const {Strategy} = require("passport-local")
const pool = require("../../db")

const localStrategy = new Strategy(async (username , password , done) =>{
    try {
        const data= await pool.query('SELECT * FROM public.usuarios WHERE usuarios.username = $1', [username] )
            
        console.log(data.rows[0].password)
        if (data.rows[0].password !== password) {
            console.log("BAd auth")
            const error = new Error("Fallo la autenticacion revisa tu nombre usuario o contraseña")
            error.status = "fail"
            error.statusCode = 401

            return  done(error);   
        }
        return done(null, data.rows)

    } catch (error) {   
        console.log("errors")
        return done("aa");    
    }
})
module.exports= localStrategy