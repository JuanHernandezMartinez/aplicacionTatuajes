import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div>
        <nav className='barra-navegacion'>
            <ul>
                <li className='btn btn-success' onClick={()=>navigate("/inicio")}>Incio</li>
                <li className='btn btn-success'  onClick={()=>navigate("/blog")}>Blog</li>
                <li className='btn btn-success'  onClick={()=>navigate("/contacto")}>Contacto</li>
                <li className='btn btn-success'  onClick={()=>navigate("/galeria")}>Galeria</li>
            </ul>
        </nav>
    </div>
  )
}