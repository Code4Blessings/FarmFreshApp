import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from './Header';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// validating form
const validate = ({ item_name, quantity }) => {
	const errors = {};

	// validating item_name
	if (!item_name) {
		errors.item_name = 'Please enter an item name';
	} else if (item_name.length < 2) {
		errors.item_name = 'The item name must have more than two characters';
	} else if (/\d/.test(item_name) === true) {
		errors.item_name = 'The item name cannot contain a number';
	}
	// validating quantity
	if (!quantity) {
		errors.quantity = 'Please enter a quantity';
	} else if (quantity > 99) {
		errors.quantity = 'The quantity cannot exceed 99';
	}

	return errors;
};

const AddInventory = () => {
	const [ inventory, setInventory ] = useState([]);
	const fetchInventory = () => {
		axiosWithAuth().get('/inventory').then((response) => {
			setInventory(response.data);
			console.log(response);
		});
	};
	useEffect(() => {
		fetchInventory();
	}, []);
	const deleteItem = (id) => {
		axiosWithAuth()
			.delete(`/inventory/${id}`)
			.then((response) => {
				fetchInventory();
				console.log(deleteItem);
			})
			.catch((err) => console.log(err));
	};
	const UpdateItem = (id) => {
		axiosWithAuth()
			.put(`/inventory/${id}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<Header />
			<Link className='log-out' to='/' onClick={() => localStorage.removeItem('token')}>
				Log Out
			</Link>
			<section className='inventory-container'>
				<h2>Add/Edit Inventory</h2>

				<Formik
					initialValues={{
						item_name : '',
						quantity  : '',
					}}
					onSubmit={(values, tools) => {
						const payload = {
							item     : values.item_name,
							quantity : Number(values.quantity),
						};
						axiosWithAuth()
							.post('/inventory', payload)
							.then((response) => {
								fetchInventory();
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
							});
					}}
					validate={validate}>
					{() => {
						return (
							<Form className='inventory-form' autoComplete='off'>
								<div>
									<Field className='quantity-input' name='quantity' type='number' placeholder='1' />
									<Field className='item-name-input' name='item_name' type='text' placeholder='Item Name' />
									<button className='add-button' type='submit'>
										Add
									</button>
								</div>
								<ErrorMessage name='quantity' component='div' className='inventory-error' />
								<ErrorMessage name='item_name' component='div' className='inventory-error' />
							</Form>
						);
					}}
				</Formik>

				<h2>Current Inventory</h2>

				<div className='table'>
					<p>Action</p>
					<p>Item</p>
					<p>Quantity</p>
				</div>

				<div className='table-contents'>
					{inventory.map((iteration, index) => (
						<div className='table-row' key={index}>
							<span>
								<i onClick={() => UpdateItem(iteration.id)} className='fas fa-pen' />
								<i onClick={() => deleteItem(iteration.id)} className='fas fa-trash' />
							</span>
							<p>{iteration.item}</p>
							<p>{iteration.quantity}</p>
						</div>
					))}
				</div>

				<button className='farmer-sign-in-button'>Save Changes</button>

				{/* <form onSubmit={UpdateItem}>
					<label>
						Edit:
						<input onChange={(e) => setInventory({ ...inventory, item: e.target.value })} value={inventory.item} />
					</label>
				</form> */}
			</section>
		</div>
	);
};

export default AddInventory;
