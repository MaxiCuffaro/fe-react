import React from "react";
import ContactoPagina from "./ContactoPagina";
import Nosotros from "./Nostros";
import Mision from "./Mision";


export default class InicioPagina extends React.Component {
    render (){
        return(
            <div className="pt-5 mt-5">
        <h2><strong><u>Inicio</u></strong></h2>
        <p class="text-muted col-12">Bienvenido a Ok perfumes espero que tengan lindo dia :D</p>
       <Mision />
       <Nosotros />
     
    
        </div>

      
  
        )
    }
}
