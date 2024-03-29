import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import img from "../assets/bienvenido.png"


export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='brr'>
      <nav className='barra-navegacion'>
        <div>
            <a class="imagen">
              <img src={img} alt="Bienvenido" width={500} height={150}/>
             
            </a>
            <ul>
              <Button className='m-2' variant='dark' onClick={() => navigate("/inicio")}>Inicio</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Blog")}>Blog</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Contacto")}>Contacto</Button>
              <Button className='m-2' variant='dark' onClick={() => navigate("/Galeria")}>Galeria</Button>
              <Button className='m-2' class="btn btn-outline-Warning" variant='Warning' onClick={() => navigate("/Login")}>Administrador</Button>

            </ul>
        </div>
      </nav>
    </div>
  )
}
