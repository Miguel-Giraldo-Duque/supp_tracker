import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [isOpen , setIsOpen ] = useState(false    )

    function toggleMenu() {
        setIsOpen((open) => !open)
    }
  return (
    <div className='conteinerNav' >
       <div className='conteinerNav_logo'>
            <h1>Reaper</h1>
       </div>

       <div className={`conteinerNav_elements ${isOpen ? "is-open": ""} `} >

            <li>
               <Link to={"/home"} className={"link-styles"}> Inicio </Link>    
            </li>
            {/* <li>
               <Link to={"/progress"} className={"link-styles"}> Objetivos </Link>    
            </li> */}
            <li>
                 <Link to={"/progress"} className={"link-styles"}> Progreso </Link>    
            </li>
           
       </div>
       <button className='conteinerNav_hamburger' onClick={toggleMenu}>
            <i class="fa-solid fa-bars"></i>
       </button>
    </div>

)
}
