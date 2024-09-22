app.get("/setup" ,async (req, res) =>{
    try {
        await pool.query("CREATE TABLE exercises (id_exercise VARCHAR(250) PRIMARY KEY  , goal_id VARCHAR, valueachieved integer,routine_id VARCHAR, FOREIGN KEY (routine_id) REFERENCES trainings(id_routine),FOREIGN KEY (goal_id) REFERENCES goals(id_goal))")
        res.send("Tabla creada :D")
    } catch (error) {
        console.error(error)
    }
 })