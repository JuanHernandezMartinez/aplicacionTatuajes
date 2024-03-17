import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div>
      <header>
            ChumaTatoo(imagen)
        </header>
      
        <nav className='barra-navegacion'>
            <ul>
                <li onClick={()=>navigate("/inicio")}>Incio</li> 
                <li onClick={()=>navigate("/Blog")}>Blog</li>
                <li onClick={()=>navigate("/Contacto")}>Contacto</li>
                <li onClick={()=>navigate("/Galeria")}>Galeria</li>

            </ul>
        </nav>
    </div>
  )
}
