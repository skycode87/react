import React, { Component , useState, useEffect } from 'react';
import { Container , Typography, Card,LinearProgress,Button,FormControl,Select,InputLabel,MenuItem } from '@material-ui/core';
import { render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';


/*
 class SimpleState extends Component {

	marca = 'GT';
	
	state = {
		cuenta: 1,
		carro: 'Mustang'
	};


	render(){
		return (
		<Container> 
			<Card>
			<Typography>La cuenta del { this.state.carro }  { this.marca }  es {this.state.cuenta}</Typography>
			<button
				onClick={()=> this.setState({ cuenta : this.state.cuenta + 1 })}>
				Aumentar 
			</button>
			</Card>
		</Container>);
	}

}


export default function SimpleStateFuncion(){

	const [cuenta,setCuenta] = useState(0);
	const [carro,setCarro] 	 = useState('Mustang');

	return (
		<Container> 
		<Card>
	<Typography>La cuenta { carro } es {cuenta}</Typography>
		<button
			onClick={ ()=> setCuenta(cuenta+1) } >
			Aumentar 
		</button>
		</Card>
	</Container>
	);
}


export default class Coordenadas extends Component{

state = {
	latitud : null,
	longitud: null
}

render(){
		return this.state.latitud == null ? (
		 <div>....Cargando....</div>	
		) : (
		<Container>
			<Card>Latitud: {this.state.latitud }</Card>
			<Card>longitud: {this.state.longitud }</Card>
		</Container>
		);
}

componentDidMount(){
	this.geoId = window.navigator.geolocation.watchPosition(position => {
		this.setState({
			latitud: position.coords.latitude,
			longitud: position.coords.longitude
		});
	});
}


componentWillMount(){
	navigator.geolocation.clearWatch(this.geoId);
}


}
*/


function useCoordenadas(){

	const [coordenadas,setCoordenadas] = useState({
		latitud : null,
		longitud : null
	});

	useEffect(() => {

	let	geoId = window.navigator.geolocation.watchPosition(position => {
				setCoordenadas({
					latitud: position.coords.latitude,
					longitud: position.coords.longitude
				});
		});

		return () =>{
			navigator.geolocation.clearWatch(geoId);
		}	
	});
	return coordenadas;
} 

const ciudad = ['Barquisimeto', 'Caracas','Envigado'];

const system = ([{
	marca:'Xiaomy',
	color:'Yellow'
},{
	marca:'Apple',
	color:'Blue'
},{
	marca:'Sansumg',
	color:'Green'
}]);

const useStyles = makeStyles((theme) => ({
	formControl: {
	  margin: theme.spacing(1),
	  minWidth: 120,
	},
	selectEmpty: {
	  marginTop: theme.spacing(2),
	},
  }));

export default function Coordenadas(){

	const ciudades = ciudad;
	const systems  = system;

//	const coordenadas = useCoordenadas();
  const classes = useStyles();

  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
	setCity(event.target.value);
  };

	return ciudad[2]!=null ? (
	<Container>
		<FormControl className={classes.formControl}>
		<InputLabel id="demo-simple-select-label">City</InputLabel>
		<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
		  value={city}
          onChange={handleChange} >
			{ciudad.map((value, index) => {
       		return <MenuItem value={value}>{value}</MenuItem>	
     		 })}
		</Select>
      </FormControl>
	</Container>
	) : (
		<Card>Ciudad :{ ciudad[2] }</Card>
	);
}