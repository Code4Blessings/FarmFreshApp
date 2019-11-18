import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import InitialSignInPage from './components/InitialSignInPage';
import FarmerSignInPage from './components/FarmerSignInPage';
import ShopperSignInPage from './components/ShopperSignInPage';
import FarmerCreateAccountPage from './components/FarmerCreateAccountPage';
import ShopperCreateAccountPage from './components/ShopperCreateAccountPage';
import FarmerHomepage from './components/FarmerHomepage';
import AddInventory from './components/AddInventory';

function App() {
	return (
		<>
			<Route exact path='/' component={InitialSignInPage}/>
			
			<Route path='/farmer/login' component={FarmerSignInPage}/>
			<Route path='/shopper/login' component={ShopperSignInPage}/>
			<Route path='/farmer/register' component={FarmerCreateAccountPage}/>
      		<Route path='/shopper/register' component={ShopperCreateAccountPage}/>
			
			<Route exact path='/farmer/dashboard' component={FarmerHomepage} />
			<Route path='/farmer/dashboard/inventory' component={AddInventory} />
			
		</>
	);
}

export default App;
