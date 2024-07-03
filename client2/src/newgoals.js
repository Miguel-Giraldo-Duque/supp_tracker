import React, { useState } from 'react'
import { Navbar } from './navbar'
import { useContext } from 'react'
import { Goal } from './goal'
import { DataContext } from './dataContext'

export const NewGoals = () => {
  function open_modal(params) {
    let modal= document.getElementById("btn-close")
    modal.style.display = "flex"
  }
  const {tracker, setTracker,  metas, setMetas} = useContext(DataContext)

  function createTracker() {
    setTracker(prevKeys =>({
      ...prevKeys,
      metas: metas
    }))
  }


console.log(tracker)
 
  const [nombreMeta, setNombreMeta] = useState("")
  const [valorAalcanzar, setValor] = useState(0)

  return (
    <div className='home home_track'>
      <Navbar></Navbar>
        <h1>Define tus metas</h1>
        <h2>Tus metricas a alcanzar</h2>
        <div className='newGoals__conteiner'>
            {

              metas.map((meta) =>{
                return(
                  <div className='newgoal__item' key={Math.random() * 20}>
                    <h3 > {meta.goalname}</h3>
                    <h3 > {meta.valorAlcanzar}</h3>
                  </div>
                  
                )
              })
            }
        </div>
        <div className='contenedor'>
          <button className='listTracks_elment--addMore openModal' onClick={open_modal}>+</button>
        </div>
        <div className='goals-content' id='btn-close' >
              <Goal inputNombreMeta = {nombreMeta} inputValorMeta = {valorAalcanzar}>
                <div className='content__goals'>
                    <h3>
                      Nombre de la meta
                  </h3>
                  <input placeholder='Nombre' className='NameNewTracker'value={nombreMeta} onChange ={e => setNombreMeta(e.target.value)} />
                </div>
                <div className='content__goals'>
                    <h3>
                     Valor a alcanzar
                  </h3>
                  <input placeholder='Valor' className='NameNewTracker' type="number" value={valorAalcanzar} onChange ={e => setValor(e.target.value)}/>
                </div>

              
            
            </Goal>
            </div>
            <button className='listTracks_elment--addMore listTracks_elment--create' onClick={createTracker}>Terminar la creacion</button>
    </div>
  )
}
