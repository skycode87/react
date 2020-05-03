import React from 'react';
import { Container , Typography, Card,LinearProgress,Button,FormControl,Select,InputLabel,MenuItem } from '@material-ui/core';

const nombre = 'Pedro Alejandro Rojas';
const pais   = "Venezuela";

class Footer extends React.Component{
    render(){
    return <Container><h1>Naci en { this.props.city }, { pais }</h1></Container>;
    }
}

export default Footer;