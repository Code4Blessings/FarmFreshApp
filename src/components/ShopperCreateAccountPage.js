import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios';

// validating form
const validate = ({username, password}) => {
	const errors = {};
	
	// validating username
	if (!username) {
		errors.username = 'Please enter a username';
	} else if (username.length < 2) {
		errors.username= 'Your username must have two characters or more';
	};

	// validating password
	if (!password) {
		errors.password = 'Please enter a password';
	} else if (/\d/.test(password) === false) {
		errors.password = 'Your password must contain a number';
	} else if (password.length < 5) {
		errors.password = 'Your password must have five characters or more';
	};

	return errors;
};

const ShopperCreateAccountPage = () => {
    return (
        <div>
            <Header/>
            <section className='farmer-and-shopper-sign-in-page-section'>
                <h2>Create an Account</h2>
                {/* form will be specific to the page i think */}
                <Formik
					initialValues = {{
						username: '',
						password: '',
					}}

					onSubmit = {(values, tools) => {
						axios.post('https://reqres.in/api/users', values)
							.then(response => {
								console.log(values);
								console.log(response);
								tools.resetForm();
							})
							.catch(error => {
								console.log(error);
							})
					}}

					validate = {validate}

					render = {() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>Farm Fresh ID</label>
									<Field name='username' type='text' placeholder='Enter Farm Fresh ID'/>
									<ErrorMessage name='username' component='div' className='error'/>
								</div>
		
								<div className='input-container'>
									<label htmlFor='password'>Password</label>
									<Field name='password' type='password' placeholder='Enter Password'/>
									<ErrorMessage name='password' component='div' className='error'/>
								</div>

								<button className='farmer-sign-in-button' type='submit'>Sign Up</button>
							</Form>
						)
					}}
				/>
                <Link to='/farmer/register'><p>Are you a farmer?</p></Link>
            </section>
        </div>
    )
};

export default ShopperCreateAccountPage;