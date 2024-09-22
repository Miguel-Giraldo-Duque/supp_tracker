const newTraining = async (req, res) =>{
        const {trackerId} = req.body
        try {
        await pool.query("INSERT INTO entrenamiento (tracker_id) VALUES($1) " ,[trackerId])
        return "Creada"
    } catch (error) {
        console.error(error)
    }


}

module.exports = {newTraining}