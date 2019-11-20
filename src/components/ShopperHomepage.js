import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import HeaderWithLogOut from './HeaderWithLogOut';

const ShopperHomepage = () => {
	const [ farms, setFarms ] = useState([]);

	useEffect(() => {
		const fetchFarms = () => {
			axiosWithAuth()
				.get('/farms')
				.then((response) => {
					setFarms(response.data);
					console.log(response);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		fetchFarms();
	}, []);

	return (
		<div>
			<HeaderWithLogOut />
			{/* log out button needed here */}
			<div className='shopper-homepage-container'>
				<h2>Choose Your Farm:</h2>
				<div className='farm-container'>
					{farms.map((iteration, index) => {
						return (
							<div className='farm-row' key={index}>
								<div>
									<h3>{iteration.farm_name}</h3>
									<p>{iteration.farm_address}</p>
									{/* <p>Oakland, CA 94606</p> */}
								</div>
								<div>
									<p>Currently Available:</p>
									<p>Squash, Corn</p>
									<Link to={`/shopper/farm/${iteration.id}`}>view full inventory</Link>
									{/* need to create dynamic link */}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ShopperHomepage;
