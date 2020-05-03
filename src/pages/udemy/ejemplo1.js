
import React,{ Component } from 'react';
import Footer from './ejemplo2';

const nombre = 'Pedro Alejandro Rojas Garcia';

class MiComponente extends Component{
    name = nombre;
    render(){
    return (
        <React.Fragment>
       <h1>Soy  { nombre } </h1>
       <Footer city="Caracas"></Footer>
       </React.Fragment>);
    }
}

export default MiComponente;