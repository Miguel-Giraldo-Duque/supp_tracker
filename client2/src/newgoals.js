import React, { useEffect, useState } from 'react'
import { Navbar } from './navbar'
import { useContext } from 'react'
import { Goal } from './goal'
import { DataContext } from './dataContext'
import axios from 'axios'

export const NewGoals = () => {
  function open_modal(params) {
    let modal= document.getElementById("btn-close")
    modal.style.display = "flex"
  }
  const {tracker, setTracker,  goals, setGoal} = useContext(DataContext)
  const [trigger, setTrigger] = useState(false)


 useEffect(() =>{
  const sendTracker = async () =>{
    if (trigger) {
      const sendTracker= await axios.post("http://localhost:3002/newTracker", {
        trackname : tracker.nombreTracker,
        goal: tracker.objetivo,
      })

      const sendGoals = await axios.post("http://localhost:3002/newGoal",{
        goals: goals,
        trackerId : sendTracker.data.idTracker
      })


      console.log(sendGoals)
        
    setTrigger(false)

    }
  }

  sendTracker()
      
},[trigger])


const createTracker = () =>{
    setTrigger(true)
    setTracker(prevKeys =>({
      ...prevKeys,
      goals: goals
    }))
  }

 
  const [goalname, setGoalName] = useState("")
  const [valuetoachieve, setValue] = useState(0)

  return (
    <div className='home home_track'>
      <Navbar></Navbar>
        <h1>Define tus metas</h1>
        <h2>Tus metricas a alcanzar</h2>
        <div className='newGoals__conteiner'>
            {

              goals.map((goal) =>{
                return(
                  <div className='newgoal__item' key={Math.random() * 20}>
                    <h3 > {goal.goalname}</h3>
                    <h3 > {goal.valuetoachieve}</h3>
                  </div>
                  
                )
              })
            }
        </div>
        <div className='conteiner'>
          <button className='listTracks_elment--addMore openModal' onClick={open_modal}>+</button>
        </div>
        <div className='goals-content' id='btn-close' >
              <Goal inputGoalname = {goalname} inputValue = {valuetoachieve}>
                <div className='content__goals'>
                    <h3>
                      Nombre de la meta
                  </h3>
                  <input placeholder='Nombre' className='NameNewTracker'value={goalname} onChange ={e => setGoalName(e.target.value)} />
                </div>
                <div className='content__goals'>
                    <h3>
                     Valor a alcanzar
                  </h3>
                  <input placeholder='Valor' className='NameNewTracker' type="number" value={valuetoachieve} onChange ={e => setValue(e.target.value)}/>
                </div>

              
            
            </Goal>
            </div>
            <button className='listTracks_elment--addMore listTracks_elment--create' onClick={createTracker}>Terminar la creacion</button>
    </div>
  )
}
