import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import HeaderWithLogOut from './HeaderWithLogOut';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ShopperGoBackButton from './ShopperGoBackButton';
import unavailable from '../fruits and vegetables/not-available.png';

const ShopperViewInventory = (props) => {
	const [products, setProducts] = useState([]);
	const params = useParams();
	
	// get request stores data, specific farm's inventory, in state
	useEffect(() => {
		const fetchProducts = (id) => {
			axiosWithAuth()
				.get(`/inventory/${params.id}`)
				.then((response) => {
					setProducts(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		fetchProducts();
	}, []);
	
	return (
		<div>
			<HeaderWithLogOut/>
			<ShopperGoBackButton/>
			<div className='shopper-view-inventory-container'>
			
				<h2>Select Your Fresh Produce</h2>
				<form className='products'>
					{products.map((item, index) => {
						return (
							<div className='product-row' key={index}>
								<img src={unavailable} alt='unavailable'/>
								<div>
									<p>{item.item}</p>
									<p>Available: {item.quantity} units</p>
									<p>Quantity:</p>
									<input type='number'></input>
								</div>
							</div>
						);
					})}
					<div className='product-row'>
						<img src={unavailable} alt='unavailable'/>
						<div>
							<p>Apple</p>
							<p>Available: 99 units</p>
							<p>Quantity:</p>
						</div>
					</div>
					<div className='product-row'>
						<img src={unavailable} alt='unavailable'/>
						<div>
							<p>Carrots</p>
							<p>Available: 80 units</p>
							<p>Quantity:</p>
						</div>
					</div>
					<div className='product-row'>
						<img src={unavailable} alt='unavailable'/>
						<div>
							<p>Carrots</p>
							<p>Available: 80 units</p>
							<p>Quantity:</p>
						</div>
					</div>
				</form>

				<button className='farmer-sign-in-button'>Place Order</button>
			
			</div>
		</div>
	);
};

export default ShopperViewInventory;
