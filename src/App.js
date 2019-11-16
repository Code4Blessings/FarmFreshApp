import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import InitialSignInPage from './components/InitialSignInPage';
import FarmerSignInPage from './components/FarmerSignInPage';
import ShopperSignInPage from './components/ShopperSignInPage';
import FarmerHomepage from './components/FarmerHomepage';

function App() {
	return (
		<>
			<Route exact path='/' component={InitialSignInPage}/>
			<Route path='/farmer/login' component={FarmerSignInPage}/>
			<Route path='/shopper/login' component={ShopperSignInPage}/>
			
			{/* need to be built
			<Route path='/farmer/createaccount' component={FarmerSignUpPage}/>
      		<Route path='/shopper/createaccount' component={ShopperSignUpPage}/> */}
      		
			<Route path='/farmer/homepage' component={FarmerHomepage} />
		</>
	);
}

export default App;
