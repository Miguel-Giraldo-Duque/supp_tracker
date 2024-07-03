import { Navbar } from './navbar.js';
import { Link } from 'react-router-dom';

export function Home() {
  return (
      <div className='home'>
        <Navbar></Navbar>
          <div className='content_title'>
            <h1>Hola Miguel</h1>
            <h2>Que vas a trackear hoy</h2>
          </div>
          <div className='listTracks'>
            <div className='listTracks_elment'> 
              <Link to="/track" className={"link-styles"}>Fuchi</Link>
            </div>
            <div className='listTracks_elment'> 
              <Link to="/track" className={"link-styles"}>Calistenia</Link>
            </div>
            <div className='listTracks_elment'> 
              <Link to="/track" className={"link-styles"}>Seducciopn</Link>
            </div>
            <div className='listTracks_elment'> 
              <Link to="/track" className={"link-styles"}>Lectura</Link>
            </div>
            <div className='listTracks_elment'> 
              <Link to="/track" className={"link-styles"}>Poesia</Link>
            </div>
            <button className='listTracks_elment--addMore'> 
              <Link to="/newTracker"  className={"link-styles--addmore"}>+</Link>
            </button>
          </div>
    </div>
  );
}

