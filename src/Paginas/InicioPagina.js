import React from "react";
import ContactoPagina from "./ContactoPagina";
import Nosotros from "./Nostros";
import Mision from "./Mision";


export default class InicioPagina extends React.Component {
    render (){
        return(
        <>
        <h2>Inicio</h2>
       <p>Bienvenido a Ok perfumes espero que tengan lindo dia :D</p>
       <Mision />
       <Nosotros />
       <ContactoPagina />    
       

        </>
      
  
        )
    }
}
