import React from 'react';
import './App.css';
import Menu from './Componentes/Menu'
import Artista from './Componentes/Artista'
import InicioPagina from './Paginas/InicioPagina';
import ContactoPagina from './Paginas/ContactoPagina';
import Nosotros from './Paginas/Nostros';
import Mision from './Paginas/Mision';
import LanzamientosPagina from './Paginas/LanzamientosPagina';

import{Routes,Route, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="pt-5 mt-5 height:100% ;" >
 
     <Router>

        <Menu />

       <Routes>
          <Route path='/' element={<InicioPagina />} />
          <Route path='/contacto' element={<ContactoPagina />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/mision' element={<Mision />} />
          <Route path='/lanzamientos' element={<LanzamientosPagina />} />
       </Routes>
    
    
    </Router>
    </div>
  );
}

export default App;
