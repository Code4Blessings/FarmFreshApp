import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import InitialSignInPage from './components/InitialSignInPage';
import InitialCreateAccountPage from './components/InitialCreateAccountPage';
import FarmerSignInPage from './components/FarmerSignInPage';
import ShopperSignInPage from './components/ShopperSignInPage';
import FarmerCreateAccountPage from './components/FarmerCreateAccountPage';
import ShopperCreateAccountPage from './components/ShopperCreateAccountPage';
import FarmerHomepage from './components/FarmerHomepage';
import FarmerEditInventory from './components/FarmerEditInventory';
import {FarmerEditInventoryContext} from './components/contexts/FarmerEditInventoryContext';
import PrivateRoute from './components/PrivateRoute';
import ShopperHomepage from './components/ShopperHomepage';
import ShopperViewInventory from './components/ShopperViewInventory';
import FarmerProfile from './components/FarmerProfile';
import ShopperCart from './components/ShopperCart';

function App() {
	return (
		<>
			<FarmerEditInventoryContext.Provider>
				<Route exact path='/' component={InitialSignInPage}/>
				<Route path='/register' component={InitialCreateAccountPage}/>
				
				<Route path='/farmer/login' component={FarmerSignInPage}/>
				<Route path='/shopper/login' component={ShopperSignInPage}/>
				<Route path='/farmer/register' component={FarmerCreateAccountPage}/>
				<Route path='/shopper/register' component={ShopperCreateAccountPage}/>
				<Route path='/farmer/profile' component={FarmerProfile}/>
				<Route path='/shopper/cart' component={ShopperCart}/>
				
				<PrivateRoute path='/shopper/dashboard' component={ShopperHomepage}/>
				<PrivateRoute path='/shopper/shane-farms' component={ShopperViewInventory}/>
				
				<PrivateRoute path='/farmer/dashboard' component={FarmerHomepage}/>
				<PrivateRoute path='/farmer/inventory' component={FarmerEditInventory}/>
			</FarmerEditInventoryContext.Provider>

		</>
	);
}

export default App;
