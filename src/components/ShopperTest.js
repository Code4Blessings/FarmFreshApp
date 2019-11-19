import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ShopperTest = () => {
	return (
		<div className='homepage-container'>
			<Header />
			<div className='homepage-links'>
				<Link>Your Account</Link>
				<Link>Choose A Farmer</Link>
			</div>
			<div className='homepage-links'>
				<Link>Order History</Link>
				<Link>Write A Testimony</Link>
				<Link to='/' onClick={() => localStorage.removeItem('token')}>
					Logout
				</Link>
			</div>
		</div>
	);
};

export default ShopperTest;
