import React, { useContext, useState } from 'react'
import { Navbar } from './navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { NewGoals } from './newgoals'
import { DataContext } from './dataContext'

export const Newtracker = () => {

  //  const CreatingUser = await axios.post("http://localhost:3002/newUser", {
  //     username : "Sample",
  //     password: "012"
  //   })
  const {tracker, setTracker, metas, setMetas} = useContext(DataContext)

  const [objetivo, setObjetivo] = useState('');
  const [nombreTracker, setNombre] = useState('');

  function iniciarTracker() {
    setTracker(prevState => ({...prevState , nombreTracker: nombreTracker, objetivo:objetivo}))
  }
  return (
    <div className='home  home_track'>
        <Navbar></Navbar>
        <h1>Define tu Tracker</h1>
        <h2>A donde llegar con este tracker</h2>

        <div className='conteiner'>
     
        <div className='conteinedor_metrica contenedor_metrica--NewTracker'> 
             <h4>Nombre del tracker</h4>
              <input placeholder='Nombre' id='name_tracker' value={nombreTracker} onInput={e => setNombre(e.target.value)} className='NameNewTracker'>
              </input>
          </div>
          <div className='conteinedor_metrica'> 
          <h4>Define tu obejtivo</h4>
              <textarea placeholder='Objetivo' id='objetivoNewTrack' value={objetivo} onChange ={e => setObjetivo(e.target.value)}>
              </textarea>
          </div>
          <button className='listTracks_elment_button ' onClick={iniciarTracker}> 
          <Link to={"/newGoals"} className={"link-styles"} > Continuar </Link>        
        </button>
        </div>
    </div>
  )
}
