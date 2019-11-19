import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ShopperSignInPage = (props) => {
	return (
		<div>
			<Header />
			<section className='farmer-and-shopper-sign-in-page-section'>
				<h2>Sign In</h2>

				{/* form will be specific to the page i think */}
				<Formik
					initialValues={{
						username : '',
						password : '',
					}}
					onSubmit={(values, tools) => {
						axiosWithAuth()
							.post('/customers/login', values)
							.then((response) => {
								localStorage.setItem('token', response.data.token);
								props.history.push('/shopper/dashboard');
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
							});
					}}
				>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>Farm Fresh ID</label>
									<Field name='username' type='text' placeholder='Enter Farm Fresh ID' />
								</div>

								<div className='input-container'>
									<label htmlFor='password'>Password</label>
									<Field name='password' type='password' placeholder='Enter Password' />
								</div>

								<button className='farmer-sign-in-button button-spacing' type='submit'>
									Sign In
								</button>
							</Form>
						);
					}}
				</Formik>

				<Link to='/shopper/register'>
					<p>Create an Account</p>
				</Link>
			</section>
		</div>
	);
};

export default ShopperSignInPage;
