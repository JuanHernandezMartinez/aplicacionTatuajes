import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div>
      <header>
            ChumaTatoo(imagen)
        </header>
      
        <nav className='barra-navegacion'>
            <ul>
                <Button className='m-2' variant='dark' onClick={()=>navigate("/inicio")}>INICIO</Button>
                <Button className='m-2' variant='dark' onClick={()=>navigate("/Blog")}>BLOG</Button>
                <Button className='m-2' variant='dark' onClick={()=>navigate("/Contacto")}>CONTACTO</Button>
                <Button className='m-2' variant='dark' onClick={()=>navigate("/Galeria")}>GALERIA</Button>

            </ul>
        </nav>
    </div>
  )
}
