
const { v4: uuidv4 } = require("uuid")

const allTrackers = async (req, res) =>{
    try {                                                                                      
     const data=  await pool.query("SELECT * FROM public.trackers")
     res.json(data)

    } catch (error) {
        console.error("Error al buscar en la base de datos", error);
     res.status(500).json({ error: 'Hubo un problema al buscar en la base de datos' })
 }
}

const newTracker = async (req, res) =>{
    const {trackname , goal, userId} = req.body
    const idTracker = uuidv4()  
    const body = {trackname , goal, userId , idTracker}
    try {
     let data = await pool.query("INSERT INTO trackers (id_tracker,nametracker, goal, user_id) VALUES($1, $2, $3, $4)" ,[idTracker, trackname, goal, "22c4falcon"])
     res.json(body)
 } catch (error) {
     console.error(error)
 }
}

const getByIdTracker = async (req, res) =>{
    let id = req.params.id
    try {                                                                                      
     const data=  await pool.query(`SELECT trackers.id_tracker AS tracker_id, trackers.nametracker AS name, JSON_AGG( JSON_BUILD_OBJECT('name', goals.namegoal,  'valueGoal', goals.valuetoachieve,'date',  goals.created_at )) AS goals FROM trackers JOIN goals ON trackers.id_tracker = goals.tracker_id WHERE trackers.id_tracker = $1 GROUP BY trackers.id_tracker;`, [id])
     res.json(data.rows)

    } catch (error) {
        console.error("Error al buscar en la base de datos", error);
     res.status(500).json({ error: 'Hubo un problema al buscar en la base de datos' })
 }
}

module.exports = {
    allTrackers,
    newTracker,
    getByIdTracker
}