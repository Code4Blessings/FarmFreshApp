import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const ShopperHomepage = () => {
	return (
		<div>
			<Header/>
			{/* log out button needed here */}
			<div className='shopper-homepage-container'>
				<h2>Choose Your Farm:</h2>
				<div className='farm-container'>
					<div className='farm-row'>
						<div>
							<h3>Shane Farms</h3>
							<p>1122 Redwood Ave.</p>
							<p>Oakland, CA 94606</p>
						</div>
						<div>
							<p className='currently-available'>Currently Available:</p>
							<p>Pumpkins</p>
							<Link to='/shopper/shane-farms'>view full inventory</Link>
						</div>
					</div>
					<div className='farm-row'>
						<div>
							<h3>Shane Farms</h3>
							<p>1122 Redwood Ave.</p>
							<p>Oakland, CA 94606</p>
						</div>
						<div>
							<p>Currently Available:</p>
							<p>Squash, Corn</p>
							<Link to='/shopper/shane-farms'>view full inventory</Link>
						</div>
					</div>
					<div className='farm-row'>
						<div>
							<h3>Shane Farms</h3>
							<p>1122 Redwood Ave.</p>
							<p>Oakland, CA 94606</p>
						</div>
						<div>
							<p>Currently Available:</p>
							<p>Tomatoes, and more!</p>
							<Link to='/shopper/shane-farms'>view full inventory</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopperHomepage;
