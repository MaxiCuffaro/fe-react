import React from "react";


export default class LanzamientosPagina extends React.Component {
constructor (props) {
    super (props);
    this.state = {
        lanzamientos: []
    }
    }

    componentDidMount () { 
    fetch("http://musicbrainz.org/ws/2/release?artist=9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa&fmt=json")
    .then( res => res.json() )
    .then((result) => {
     console.log(result)
        this.setState ({
        lanzamientos: result.releases
     });
       
    });
    }

render() {
    return(
        <div>
        {this.state.lanzamientos.map((lanzamiento)  => (
         <p>{lanzamiento.title} ({lanzamiento.date})</p>   
        ))};

        </div>
        
    );
}
}