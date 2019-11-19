import React from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';
import InitialSignInPage from './components/InitialSignInPage';
import FarmerSignInPage from './components/FarmerSignInPage';
import ShopperSignInPage from './components/ShopperSignInPage';
import FarmerCreateAccountPage from './components/FarmerCreateAccountPage';
import ShopperCreateAccountPage from './components/ShopperCreateAccountPage';
import FarmerHomepage from './components/FarmerHomepage';
import AddInventory from './components/AddInventory';
import { AddInventoryContext } from './components/contexts/AddInventoryContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<>
		<AddInventoryContext.Provider>
		<Link to='/' onClick={() => localStorage.removeItem('token')}>
						Logout
					</Link>
			<Route exact path='/' component={InitialSignInPage}/>
			
			<Route path='/farmer/login' component={FarmerSignInPage}/>
			<Route path='/shopper/login' component={ShopperSignInPage}/>
			<Route path='/farmer/register' component={FarmerCreateAccountPage}/>
      		<Route path='/shopper/register' component={ShopperCreateAccountPage}/>
			

			<PrivateRoute path='/farmer/dashboard' component={FarmerHomepage} />
			<PrivateRoute path='/farmer/dashboard/inventory' component={AddInventory} />
					</AddInventoryContext.Provider>

		</>
	);
}

export default App;
