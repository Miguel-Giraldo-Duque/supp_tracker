const express = require("express")
const pool = require("./db")
const app = express()
const cors = require("cors")
const port= "3002"

app.use(express.json())
app.use(cors())

app.listen(port, () =>{
    console.log("Server activo en :"+port)
})


app.post("/newUser" ,async (req, res) =>{
   const {username , password} = req.body
   try {
    await pool.query("INSERT INTO usuarios (username, password) VALUES($1, $2) " ,[username, password])
    res.send("Creado :D")
} catch (error) {
    console.error(error)
}
})

app.post("/nuevoTracker" ,async (req, res) =>{
    const {trackname , objetivo, userId} = req.body
    try {
     await pool.query("INSERT INTO tracker (trackname, objetivo, user_id) VALUES($1, $2, $3) " ,[trackname, objetivo, userId])
     res.send("Creado :D")
 } catch (error) {
     console.error(error)
 }
 })
 

 app.post("/nuevoEntreno" ,async (req, res) =>{
    const {trackerId} = req.body
    try {
     await pool.query("INSERT INTO entrenamiento (tracker_id) VALUES($1) " ,[trackerId])
    return "Creada"
 } catch (error) {
     console.error(error)
 }
 })


 app.post("/nuevaMeta" ,async (req, res) =>{
    const {goalName,tipoValor, trackerId} = req.body
    try {
     await pool.query("INSERT INTO metas (goalname, tipodevalor , tracker_id) VALUES($1,$2,$3) " ,[goalName, tipoValor ,trackerId])
     res.send("Creado :D")
 } catch (error) {
     console.error(error)
 }
 })


 app.post("/nuevoEjercicio" ,async (req, res) =>{
    const {valorAlcanzado,idEntreno, idMeta} = req.body
    try {
     await pool.query("INSERT INTO ejercicio (valoralcanzado, entreno_id, meta_id) VALUES($1,$2,$3) " ,[valorAlcanzado, idEntreno ,idMeta])
     res.send("Creado :D")
 } catch (error) {
     console.error(error)
 }
 })



app.get("/setup" ,async (req, res) =>{
    try {
        await pool.query("CREATE TABLE ejercicio(id_ejercicio SERIAL PRIMARY KEY,valorAlcanzado integer, entreno_id integer , meta_id integer, FOREIGN KEY (entreno_id) REFERENCES entrenamiento(id_entreno), FOREIGN KEY (meta_id) REFERENCES metas(id_meta))")
        res.send("Tabla creada :D")
    } catch (error) {
        console.error(error)
    }
 })


app.get("/all" ,async (req, res) =>{
    try {
     const data=  await pool.query("SELECT usuarios.id , usuarios.username, tracker.trackname ,tracker.objetivo , metas.goalname , metas.tipodevalor 	FROM tracker  	INNER JOIN usuarios ON tracker.user_id = usuarios.id 	INNER JOIN metas ON tracker.id_tracker = metas.tracker_id")
     res.send(data.rows)
 } catch (error) {
     console.error(error)
 }
})