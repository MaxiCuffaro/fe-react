import React from "react";
import ListaArtistas from "../Componentes/ListaArtistas";

export default class Nosotros extends React.Component {
   
   artistas = [

    {nombre: 'Olympea',
      img: './img/olympea.jpg',
      descripcion:'Olympea es una fragancia de Paco Rabanne pensada para mujeres poderosas. Sus notas de vainilla salada, agua de jazmín, mandarina verde y flor de jengibre crean un aroma cautivador y mágico que no deja a nadie indiferente. ¡Olympea te convertirá en una diosa, en un icono fascinante y único!'},

    
{nombre: 'Lady prive',
img: './img/lady.prive.jpg',
descripcion:'Una fragancia oriental íntima e intensa. Explorar como un sensual viaje de gusto. En el corazón de Lady Million Prive florece una flor de heliotropo y una vainilla soleada levantada por un toque de frambuesa.'},
    
{nombre: 'Good girl',
img:'./img/good.rojo.jpg',
descripcion:'El lado misterioso de Good Girl se expresa con el rico y fragante cacao y la embriagadora haba tonka, mientras que la almendra y el café le aportan notas de audaz vitalidad.'}
   ]
   
    render (){

        return(
            <>
              <h2><strong><u> Perfumes </u></strong></h2>
              <ListaArtistas artistas={this.artistas} />
            </>
        )
    }
}