import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const FarmerHomepage = () => {
	return (
		<div>
			<Header/>
			<Link className='log-out' to='/' onClick={() => localStorage.removeItem('token')}>Log Out</Link>
			<div className='homepage-container'>
				<div className='homepage-row'>
					<Link><button>View Orders</button></Link>
					<Link to='/farmer/dashboard/inventory'><button>Add/Edit Inventory</button></Link>
				</div>
				<div className='homepage-row'>
					<Link><button>Add Upcoming Harvests</button></Link>
					<Link><button>View Farm Profile</button></Link>
				</div>	
			</div>
		</div>
	);
};

export default FarmerHomepage;
