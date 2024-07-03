import React from 'react'
import { Navbar } from './navbar'
import { Link } from 'react-router-dom'

export const TrackDay = () => {
  return (
    <div className='home home_track' >
        <Navbar></Navbar>
        <h1>22/03/2024</h1>
        <h2> Track : fuchi</h2>

      
      <div className='contenedor'>
        <div className='conteinedor_metrica'> 
          <p>Rodillazos</p>
            <input placeholder='Valor alcanzado'>

            </input>
        </div>

          <div className='conteinedor_metrica'> 
            <p>Golpe basico</p>
              <input placeholder='Valor alcanzado'>

              </input>
          </div>

          <div className='conteinedor_metrica'> 
            <p>Golpe lateral</p>
              <input placeholder='Valor alcanzado'>

              </input>
          </div>

          <button className='listTracks_elment_button '> 
          <Link to={"/home"} className={"link-styles"}> Terminar </Link>        
      </button>
      </div>
  
      </div>
  )
}
