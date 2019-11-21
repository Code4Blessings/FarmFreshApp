import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import HeaderWithLogOut from './HeaderWithLogOut';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ShopperGoBackButton from './ShopperGoBackButton';

const ShopperViewInventory = () => {
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
			
				<h2>Shane Farms</h2>
				<h3>1122 Redwood Ave. Oakland, CA 94606</h3>
				<div className='products'>
					{products.map((item, index) => {
						return (
							<div className='product-row' key={index}>
								<img src='' alt='carrot' />
								<div>
									<p>{item.item}</p>
									<p>Available: {item.quantity} units</p>
									<p>Quantity:</p>
								</div>
							</div>
						);
					})}
				</div>

				<button className='farmer-sign-in-button'>Place Order</button>
			
			</div>
		</div>
	);
};

export default ShopperViewInventory;
