import React from 'react'
import { Navbar } from './navbar'
import { Link } from 'react-router-dom'
import { DataContext } from './dataContext'
import { useContext } from 'react'

export const Progess = () => {
  const { listTrackers, setList} = useContext(DataContext)
  return (
    <div className='home'>
        <Navbar></Navbar>
        <div className='content_title'>
            <h1>Conoce tu progreso</h1>
            <h2>como vas con tus metas</h2>
          </div>
        <div className='listTracks'>
              {
           listTrackers.map((tracker) =>{
            return(
            <div className='listTracks_elment' key={Math.random() * 100}> 
                <Link to="/track" className={"link-styles"}>{tracker.nametracker}</Link>
            </div>
            )
          })
          }
        </div>
    </div>
  )
}
