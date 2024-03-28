import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import img from '../assets/bienvenido.png'


export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='brr'>
      <nav className='barra-navegacion'>
        <div className='color'>
            <a class="imagen" href="#">
              <img src="../assets/bienvenido.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
              Chuma tatoo
            </a>
            <ul>
              <Button className='m-2' variant='dark' onClick={() => navigate("/inicio")}>INICIO</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Blog")}>Blog</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Contacto")}>Contacto</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Galeria")}>Galeria</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Galeria")}>Galeria</Button>
            </ul>
        
        </div>
      </nav>
    </div>
  )
}
