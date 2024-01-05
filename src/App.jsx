import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Portada from './components/Portada/Portada'
import Encabezado from './components/Encabezado/Encabezado'
import Planificacion from './components/Planificacion/Planificacion'
import Produccion from './components/Produccion/produccion'

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/navbar" element={<Encabezado/>}/>
          <Route path="/" element={<Portada/>}/>
          <Route path="/PedidoProduccion" element={<Planificacion/>}/>
          <Route path="/Produccion" element={<Produccion/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
