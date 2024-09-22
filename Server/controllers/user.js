const { v4: uuidv4 } = require("uuid")

const newUser = async (req, res) =>{
    const id = uuidv4()
    const {username , password} = req.body
    try {
     await pool.query("INSERT INTO usuarios (id,username, password) VALUES($1, $2 , $3) " ,[id, username, password])
     res.send("Creado :D")
 } catch (error) {
     console.error(error)
 }
 }

const getAll =  async (req, res) =>{
    try {
    const data=  await pool.query("SELECT usuarios.id , usuarios.username, trackers.nametracker ,trackers.goal , goals.namegoal , goals.typevalue 	FROM trackers  	INNER JOIN usuarios ON trackers.user_id = usuarios.id 	INNER JOIN goals ON goals.tracker_id = goals.tracker_id")
    res.send(data.rows)
    } catch (error) {
    console.error(error)
    }
}


module.exports = {newUser, getAll}