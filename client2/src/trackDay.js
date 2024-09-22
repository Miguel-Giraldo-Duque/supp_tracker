import React, {useContext, useEffect, useState,} from 'react'
import { Navbar } from './navbar'
import { Link, useParams } from 'react-router-dom'
import { DataContext } from './dataContext'
import axios from 'axios'
export const TrackDay = () => {
  let date = new Date()
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('es-ES', options);
  const {id} = useParams()
  const { listTrackers, setList} = useContext(DataContext)
  const [trackerObject, setTracker]= useState({name: "",  goals: [ {nameGoal : "", valueGoal: 0 }]} )
  useEffect(() =>{
    const request = async () =>{
      try {
        let data = await axios.get(`http://localhost:3002/trackers/${id}`)
        setTracker(data.data[0])
        console.log(data.data[0])

      } catch (error) {
        throw error
      }
      
    }

    request()
  },[setList])



  return (
    <div className='home home_track' >
        <Navbar></Navbar>
        <h1>{formattedDate}</h1>
        <h2>{trackerObject.name} </h2>

        <div className='contenedor'>
      {
        trackerObject.goals.map((goal) =>{
          console.log(goal)
          return(
           
            <div className='conteinedor_metrica'> 
              <p>{goal.name}</p>
                <input placeholder={`Valor a alcanzado`} className='NameNewTracker'>

                </input>
            </div>
          )
        })

      }
       <button className='listTracks_elment_button newExercise '> 
          <Link to={"/home"} className={"link-styles"}> Terminar </Link>        
      </button>
      </div>
    </div>
  )
}
