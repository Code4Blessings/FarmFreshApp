import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderWithLogOut from './HeaderWithLogOut';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ShopperViewInventory = () => {
	const [ products, setProducts ] = useState([]);
	const params = useParams();
	console.log(params);

	useEffect(() => {
		const fetchProducts = () => {
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
				<button className='farmer-sign-in-button'>Order</button>
			</div>
		</div>
	);
};

export default ShopperViewInventory;
