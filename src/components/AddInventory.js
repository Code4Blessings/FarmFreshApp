import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

	return (
		<div>
			<Header />
			<Link className='log-out' to='/' onClick={() => localStorage.removeItem('token')}>Log Out</Link>
			<section className='inventory-container'>
				<h2>Add/Edit Inventory</h2>

				<Formik
					initialValues={{
						item_name : '',
						quantity  : '',
					}}
					onSubmit={(values, tools) => {
						axios
							.post('https://reqres.in/api/users', values)
							.then((response) => {
								setInventory([ ...inventory, values ]);
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
								<Field className='quantity-inventory' name='quantity' type='number' placeholder='1' />
								<ErrorMessage name='quantity' component='div' className='error' />

								<Field className='inventory-input' name='item_name' type='text' placeholder='Item Name' />
								<ErrorMessage name='item_name' component='div' className='error' />

								<button className='add-btn' type='submit'>
									+
								</button>
							</Form>
						);
					}}
				</Formik>

				<h2>Current Inventory</h2>

				<div className='table'>
					<p>Hello!!!!!!</p>
					<p>Item</p>
					<p>Quantity</p>
				</div>

				<div className='table-contents'>
					{inventory.map((iteration, index) => (
						<div className='table-row' key={index}>
							<p>edit</p>
							<p>{iteration.item_name}</p>
							<p>{iteration.quantity}</p>
						</div>
					))}
				</div>

				<button className='farmer-sign-in-button'>Save Changes</button>
			</section>
		</div>
	);
};

export default AddInventory;
