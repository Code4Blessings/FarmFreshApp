import React from 'react';
import Header from './components/Header';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios';

// validating form
const validate = ({username, password}) => {
	const errors = {};
	
	// validating username
	if (!username) {
		errors.username = '*Please enter a username';
	} else if (username.length < 2) {
		errors.username= '*Your name must have two characters or more';
	};

	// validating password
	if (!password) {
		errors.password = '*Please enter a password';
	} else if (/\d/.test(password) === false) {
		errors.password = '*Your password must contain a number';
	};

	return errors;
};

const FarmerSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='farmer-and-shopper-sign-in-page-section'>
                <h2>Sign In</h2>
                {/* form will be specific to the page i think */}
                <Formik
					initialValues = {{
						farmFreshID: '',
						password: '',
					}}

					// onSubmit = {(values, tools) => {
					// 	axios.post('https://reqres.in/api/users', values)
					// 		.then(response => {
					// 			setMessage([...message, response.data]);
					// 			tools.resetForm();
					// 		})
					// 		.catch(error => {
					// 			console.log(error);
					// 		})
					// }}

					validate = {validate}

					render = {() => {
						return (
							<Form autoComplete='off'>
								<Field name='username' type='text' placeholder='Enter Farm Fresh ID'/>
								<ErrorMessage name='username' component='div' className='error'/>

								<Field name='password' type='password' placeholder='Enter Password'/>
								<ErrorMessage name='password' component='div' className='error'/>
								
								<input className='farmer-sign-in-button' type='submit'/>
							</Form>
						)
					}}
				/>
                <p>Create an Account</p>
            </section>
        </div>
    )
};

export default FarmerSignInPage;