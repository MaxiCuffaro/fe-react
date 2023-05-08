import React from "react";
import App from "../App.css";

export default class ContactoPagina extends React.Component {
   
    constructor(props){
        super(props);

    this.state = {
        nombre : '',
        mensaje :'',
        mostrar: true,
    }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
        this.cambiarMostrar = this.cambiarMostrar.bind(this);
        this.changedTextArea = this.changedTextArea.bind(this);
    }

   submitted(event) {
    alert("Se envio el formulario de " + this.state.nombre);
    this.setState({
        nombre: "",
        mensaje: "",
   })
    
    event.preventDefault();
    
    
   }

   cambiarMostrar() {
    var mostrarActual = this.state.mostrar;
    this.setState({ nombre : '',
    mensaje :'',
    mostrar: true,
        } ) } 



   changed(event) {
   console.log(event)
    this.setState({
    nombre: event.target.value
    })
    }

    changedTextArea(event) {
        console.log(event)
         this.setState({
         mensaje: event.target.value
         })
         }


    render (){
        return(
       <>
       <h2> Contacto</h2>
       <form onSubmit={this.submitted}>
         <div className=" form-group my-2 col-12">
            <label> <u> Nombre </u> </label>
            <input type="text" className="form-control" placeholder="Ingresa tu nombre" onChange={this.changed} value={this.state.nombre} />
         </div>
          <div className="form-group my-2 col-12">
                <label> <u> Mensaje </u></label>
                <textarea className= "form-control" placeholder="Dejanos tu mensaje" value={this.state.mensaje} onChange={this.changedTextArea}></textarea>
            </div>
            <button type="submit" className= "btn btn-outline-primary m-3 px-3" >Enviar </button>
           
       </form>
       </>
        )
    }
}

