import React from "react";

import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render (){

        return(
            <div className="row d-flex fixed-top px-4 py-2 m-0 bg-warning col-12">
                <div className="col-12 d-flex align-items-center">
                    <h1>Ok Perfumes</h1>
                    <Link to="/" className="mx-3">Inicio </Link>
                    <Link to="/nosotros" className="mx-3">Perfumes </Link>
                    <Link to="contacto" className="mx-3">Contacto </Link>
                    <Link to="mision" className="mx-3">Mision </Link>
                    <Link to="lanzamientos" className="mx-3">lanzamientos </Link>
                </div>
            </div>
  
        )
    }
}