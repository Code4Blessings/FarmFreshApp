import React from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';
import InitialSignInPage from './InitialSignInPage';

function App() {
	return (
		<>
			<Route exact path='/' component={InitialSignInPage}/>
		</>
	);
}

export default App;
