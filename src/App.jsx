import { Routes, Route } from 'react-router-dom'
import PaginaInicio from './pages/PaginaInicio'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import Navbar from './layout/Navbar'
import "./styles/App.css"
import Footer from './layout/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/inicio' element={<PaginaInicio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>
  
      <Footer />
    </>
  )
}

export default App
