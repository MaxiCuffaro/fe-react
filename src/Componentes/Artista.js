import React from "react";
import './Artista.css';

export default class Artista extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            mostrar: true
        }
        this.cambiarMostrar = this.cambiarMostrar.bind(this);
    }

    cambiarMostrar () {
        var mostrarActual = this.state.mostrar;
        this.setState(prevState => ({ 
            mostrar: !mostrarActual
        }));
      
    }
    
    render(){ 
          var clase ="";
         var texto = "";
if(this.state.mostrar){
        clase = "d-block";
        texto= "ver mas"
}else {
    clase = "d-none"
    texto = "ver menos"
}
        return(
            <div className={"row my-4"}>
                <div className="col-12 d-flex aling-items-center">
                    <img src={this.props.img} alt={this.props.nombre} className="band-thumb" />
                    <div className=" px-3 " >
                    <h2>{this.props.nombre}</h2>
                    < button className="btn btn-danger" onClick={this.cambiarMostrar}>{texto}</button>
                    <div className =  {this.state.mostrar ? 'd-none' : ''}  >
                    <p>{this.props.descripcion} </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}