 

 const newExercice = async (req, res) =>{
    const {valorAlcanzado,idEntreno, idMeta} = req.body
    try {
     await pool.query("INSERT INTO ejercicio (valoralcanzado, entreno_id, meta_id) VALUES($1,$2,$3) " ,[valorAlcanzado, idEntreno ,idMeta])
     res.send("Creado :D")
 } catch (error) {
     console.error(error)
 }
 }

 module.exports= {newExercice}