import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Portada from './components/Portada/Portada'
import Encabezado from './components/Encabezado/Encabezado'
import Planificacion from './components/Planificacion/Planificacion'
import Produccion from './components/Produccion/produccion'
import Cargas from './components/Cargas/Cargas'
import Ingresos from './components/Ingresos/Ingresos'

 
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
          <Route path="/Cargas" element={<Cargas/>}/>
          <Route path="/Ingresos" element={<Ingresos/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
