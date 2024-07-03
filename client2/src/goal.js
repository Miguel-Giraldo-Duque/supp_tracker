import React from 'react'
import { useContext } from 'react'
import { DataContext } from './dataContext'
export const Goal = ({children , inputNombreMeta, inputValorMeta}) => {
  const { metas, setMetas} = useContext(DataContext)
    function close_modal() {
        let modal= document.getElementById("btn-close")
        modal.style.display = "none"
    }

    function newGoal() {
      let modal= document.getElementById("btn-close")
      modal.style.display = "none"

      setMetas(prevGoals => [...prevGoals, {goalname: inputNombreMeta, valorAlcanzar: inputValorMeta }])
  }


  return (
    <div className='modal_newGoal' >
        <button className='modal_close'onClick={close_modal}>X</button>
        {children}

        <button className='listTracks_elment--addMore listTracks_elment--create' onClick={newGoal}>Crear meta</button>
    </div>
  )
}
