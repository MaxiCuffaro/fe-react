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
    <>
 
     <Router>
     <div className="titulo px-4 py-2 m-0 alaing-items-center col-12  pt-5 mt-5 ">
        <Menu />

       <Routes>
          <Route path='/' element={<InicioPagina />} />
          <Route path='/contacto' element={<ContactoPagina />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/mision' element={<Mision />} />
          <Route path='/lanzamientos' element={<LanzamientosPagina />} />
       </Routes>
    
      
  
 
      </div>
    </Router>
    </>
  );
}

export default App;
