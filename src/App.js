import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Container1 from './containers/container1';
import { Container } from '@material-ui/core';

class App extends Component{

render(){
	return (
		<div>
			<p>React</p>
			<Container1 ></Container1>
		</div>
	)
}
}


export default App;
