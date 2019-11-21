import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import HeaderWithLogOut from './HeaderWithLogOut';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ShopperGoBackButton from './ShopperGoBackButton';
import images from '../images.json';

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
								<img src='https://i.imgur.com/OzziK4D.png' alt='produce'/>
								<div>
									<p>{item.item}</p>
									<p>Available: {item.quantity} units</p>
									<input className='edit-quantity-input' type='number'></input>
								</div>
							</div>
						);
					})}
				</form>
				<button className='farmer-sign-in-button'>Place Order</button>
			</div>
		</div>
	);
};

export default ShopperViewInventory;
