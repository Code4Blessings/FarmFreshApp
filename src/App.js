import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import InitialSignInPage from './InitialSignInPage';
import FarmerSignInPage from './FarmerSignInPage';

function App() {
	return (
		<>
			<Route exact path='/' component={InitialSignInPage}/>

			<Route path='/farmer' render={() => (
				<FarmerSignInPage/>
			)}/>
		</>
	);
}

export default App;
