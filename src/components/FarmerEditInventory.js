import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import HeaderWithLogOut from './HeaderWithLogOut';

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
	const [ editing, setEditing ] = useState(false);
	const [ lineItem, setLineItem ] = useState({});

	const editRow = (item) => {
		setEditing(true);
		setLineItem({
			...item,
		});
	};

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

	const changeLineItem = (event) => {
		console.log(event.target.name, event.target.value);
		setLineItem({
			...lineItem,
			[event.target.name]: event.target.value,
		});
	};

	const UpdateItem = () => {
		setEditing(false);
		axiosWithAuth()
			.put(`/inventory/${lineItem.id}`, lineItem)
			.then(() => {
				fetchInventory();
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<HeaderWithLogOut />
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
					{inventory.map((item, index) => (
						<form className='table-row' key={index}>
							<span>
								<i onClick={() => editRow(item)} className='fas fa-pen' />
								<i onClick={() => deleteItem(item.id)} className='fas fa-trash' />
							</span>
							{editing && item.id === lineItem.id ? (
								<input name='item' placeholder='item' value={lineItem.item} onChange={changeLineItem} />
							) : (
								<p>{item.item}</p>
							)}
							{editing && item.id === lineItem.id ? (
								<input name='quantity' placeholder='quantity' value={lineItem.quantity} onChange={changeLineItem} />
							) : (
								<p>{item.quantity}</p>
							)}
						</form>
					))}
				</div>

				{editing && (
					<button className='farmer-sign-in-button' onClick={UpdateItem}>
						Save Changes
					</button>
				)}
			</section>
		</div>
	);
};

export default AddInventory;
