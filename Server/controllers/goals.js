const newGoal =  async (req, res) =>{
    const {goals, trackerId} = req.body
    const body = {trackerid: trackerId, goals: goals }
    try {
        for ( const goal of goals) {
            const idGoal = uuidv4() 
            await pool.query("INSERT INTO goals (id_goal,namegoal ,typevalue ,valuetoachieve, tracker_id) VALUES($1,$2,$3, $4, $5) " ,[idGoal, goal.goalname , "number", goal.valuetoachieve, trackerId])
        }
     res.json(body)
 } catch (error) {
     console.error(error)
 }
 }


module.exports = { newGoal}