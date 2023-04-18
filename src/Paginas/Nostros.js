import React from "react";
import ListaArtistas from "../Componentes/ListaArtistas";

export default class Nosotros extends React.Component {
   
   artistas = [

    {nombre: 'Olympea',
      img: './img/olympea.jpg',
      descripcion:'----'},

    
{nombre: 'lady prive',
img: './img/lady.prive.jpg',
descripcion:'----'},
    
{nombre: 'good girl',
img:'./img/good.rojo.jpg',
descripcion:'----'}
   ]
   
    render (){

        return(
            <>
              <h2> Perfumes </h2>
              <ListaArtistas artistas={this.artistas} />
            </>
        )
    }
}