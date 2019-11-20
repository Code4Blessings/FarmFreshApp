import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import HeaderWithLogOut from './HeaderWithLogOut';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const ShopperViewInventory = () => {
	const [ products, setProducts ] = useState([]);
	const params = useParams();
	console.log(params);

	useEffect(() => {
		const fetchProducts = (id) => {
			axiosWithAuth()
				.get(`/inventory/${params.id}`)
				.then((response) => {
					setProducts(response.data);
					console.log(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		fetchProducts();
	}, []);
	// get request will store data in state, i think, and disburse that data everywhere in this file
	return (
		<div>
			<HeaderWithLogOut />
			<div className='shopper-view-inventory-container'>
				<h2>Choose Your Products</h2>
				{products.map((item, index) => {
					return (
						<div className='products'>
							<div className='product-row' key={index}>
								<h3>{item.item}</h3>
								<p>{item.quantity}</p>
							</div>
						</div>
					);
				})}
				<Link to='/shopper/dashboard'>go back</Link>
				{/* <h2>Shane Farms</h2>
				<h3>1122 Redwood Ave. Oakland, CA 94606</h3> */}
				{/* <div className='products'>
					<div className='product-row'>
						<img src={pumpkin} alt='pumpkin' />
						<div>
							<p>Organic Pumpkin</p>
							<p>Available: 56 units</p>
							<p>Quantity:</p> */}

				{/* /* can set a restriction so that you dont order more than available */}
				{/* </div>
					</div> */}
				{/* <div className='product-row'>
						<img src={pumpkin} alt='pumpkin' />
						<div>
							<p>Organic Pumpkin</p>
							<p>Available: 56 units</p>
							<p>Quantity:</p> */}
				{/* can set a restriction so that you dont order more than available */}
				{/* </div>
					</div>
					<div className='product-row'>
						<img src={pumpkin} alt='pumpkin' />
						<div>
							<p>Organic Pumpkin</p>
							<p>Available: 56 units</p>
							<p>Quantity:</p> */}
				{/* can set a restriction so that you dont order more than available */}
				{/* </div>
					</div>
				</div> */}
				<button className='farmer-sign-in-button'>Order</button>
			</div>
		</div>
	);
};

export default ShopperViewInventory;
