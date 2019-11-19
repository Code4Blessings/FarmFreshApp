import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import MenuButton from './MenuButton';

const FarmerHomepage = () => {
	return (
		<div>
			<Header/>
			<MenuButton className="log-out"/>
			<div className='homepage-container'>
				<div className='homepage-row'>
					<Link><button>View Orders</button></Link>
					<Link to='/farmer/inventory'><button>Add/Edit Inventory</button></Link>
				</div>
				<div className='homepage-row'>
					<Link><button>Add Upcoming Harvests</button></Link>
					<Link to='/farmer/profile'><button>View Farm Profile</button></Link>
				</div>
			</div>
		</div>
	);
};

export default FarmerHomepage;
