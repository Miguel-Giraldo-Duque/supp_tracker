import React from 'react'
import { Navbar } from '../navbar'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div className='home'>
    <Navbar></Navbar>    

    <div className='conteiner login'>
        <h1>Login</h1>
        <input placeholder='Usuario' className='NameNewTracker'></input>
        <input placeholder='Contraseña' className='NameNewTracker'></input>
        <button className='listTracks_elment--addMore listTracks_elment--create'>Iniciar secion</button>
        <p>Aun no tienes cuenta ? <Link to={"/newUser"}>Crear una cuenta</Link></p>
  
    </div>
    </div>  
  )
}
