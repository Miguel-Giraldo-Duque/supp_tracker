import { Navbar } from './navbar.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext , useEffect } from 'react';
import { DataContext } from './dataContext.js';
export function Home() {
  const { listTrackers, setList} = useContext(DataContext)

  useEffect(() =>{
    const request = async () =>{
      try {
        let data = await axios.get("http://localhost:3002/trackers")
        setList(data.data.rows)  
      } catch (error) {
        throw error
      }
      
    }

    request()
  },[setList])
  console.log(listTrackers)
  return (
      <div className='home'>
        <Navbar></Navbar>
          <div className='content_title'>
            <h1>Hola Miguel</h1>
            <h2>Que vas a trackear hoy</h2>
          </div>
          <div className='listTracks'>
          {
                listTrackers.map((tracker) =>{
                  return(
                  <div className='listTracks_elment' key={tracker.id_tracker}> 
                      <Link to={`/track/${tracker.id_tracker}`} className={"link-styles"}>{tracker.nametracker}</Link>
                  </div>
                  )
                })
          }
          <button className='listTracks_elment--addMore'> 
              <Link to="/newTracker"  className={"link-styles--addmore"}>+</Link>
          </button>
           
          </div>
    </div>
  );
}

