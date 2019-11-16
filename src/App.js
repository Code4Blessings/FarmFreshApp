import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import InitialSignInPage from './InitialSignInPage';
import FarmerSignInPage from './FarmerSignInPage';
import FarmerHomepage from './components/FarmerHomepage'

function App() {
	return (
		<>
			<Route exact path='/' component={InitialSignInPage}/>
			<Route path='/farmer/login' component={FarmerSignInPage}/>
			{/* need to be built
			<Route exact path='/shopper'> component={ShopperSignInPage}/>
			<Route path='/farmer/createaccount'> component={FarmerSignUpPage}/>
      <Route path='/shopper/createaccount'> component={ShopperSignUpPage}/> */}
      <Route path='/farmer/homepage' component={FarmerHomepage} />
		</>
	);
}

export default App;
