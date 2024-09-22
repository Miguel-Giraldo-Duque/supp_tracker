import React from 'react'
import { Navbar } from '../navbar'
import { Link } from 'react-router-dom'
export const NewUser = () => {
  return (
    <div className='home'>
    <Navbar></Navbar>    

    <div className='conteiner login'>
        <h1>Crear cuenta</h1>
        <input placeholder='Usuario' className='NameNewTracker'></input>
        <input placeholder='Correo' className='NameNewTracker'></input>
        <input placeholder='Contraseña' className='NameNewTracker'></input>
        <button className='listTracks_elment--addMore listTracks_elment--create'>Crear cuenta</button>
  
    </div>
    </div>  
  )
}
