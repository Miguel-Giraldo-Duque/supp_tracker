import React from 'react'
import { Navbar } from './navbar'
import { Link } from 'react-router-dom'

export const Progess = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <div className='content_title'>
            <h1>Conoce tu progreso</h1>
            <h2>como vas con tus metas</h2>
          </div>
        <div className='listTracks'>
            <div className='listTracks_elment progress'> 
                <Link to={"/home"} className={"link-styles"}> Fuchi </Link>    
            </div>
            <div className='listTracks_elment progress' > 
                <Link to={"/home"} className={"link-styles"}> Seducciopn </Link>    
            </div>
            <div className='listTracks_elment  progress'> 
                <Link to={"/home"} className={"link-styles"}> Calistenia </Link>    
            </div>
            <div className='listTracks_elment  progress'> 
                <Link to={"/home"} className={"link-styles"}> Lectura </Link>    
            </div>
            <div className='listTracks_elment  progress'> 
                <Link to={"/home"} className={"link-styles"}> Poesia </Link>    
            </div>
          </div>
    </div>
  )
}
