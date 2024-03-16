import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div>
      <header>
            Estudio Chuma
        </header>
        <nav className='barra-navegacion'>
            <ul>
                <li onClick={()=>navigate("/")}>Incio</li> 
                <li onClick={()=>navigate("/blog")}>Blog</li>
                <li onClick={()=>navigate("/contacto")}>Contacto</li>
                <li onClick={()=>navigate("/galeria")}>Galeria</li>

            </ul>
        </nav>
    </div>
  )
}
