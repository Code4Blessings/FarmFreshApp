import React from "react";
import Header from "./Header";
import { Formik, Form, Field, ErrorMessage } from 'formik';

// validating form
const validate = ({ farm_name, address }) => {
	const errors = {};

	// validating Farm Name
	if (!farm_name) {
		errors.farm_name = 'Please enter the name of your farm';
	} else if (farm_name.length < 4) {
		errors.farm_name = 'Your name must have two characters or more';
	}

	// validating Address
	if (!address) {
		errors.address = 'Please enter farm address';
    } else if (address.length < 5) {
        errors.address = 'Your address must have 5 characters or more';
    }

	return errors;
};


const FarmerProfile = () => {
    return (
        <div>
            <Header/>
            <section className='farmer-and-shopper-sign-in-page-section'>
				<h2>Create A Farm Profile</h2>

				{/* form will be specific to the page i think */}
				<Formik
					initialValues={{
						farm_name : '',
						address : '',
					}}
					
					validate={validate}>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='farm_name'>Farm Name</label>
									<Field name='farm_name' type='text' placeholder='Enter the name of your farm' />
									<ErrorMessage name='farm_name' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='address'>Farm Address</label>
									<Field name='address' type='text' placeholder='Enter the farm address' />
									<ErrorMessage name='address' component='div' className='error' />
								</div>

								<button className='farmer-sign-in-button button-spacing' type='submit'>
									Create 
								</button>
							</Form>
						);
					}}
				</Formik>
			</section>

        </div>

    );
}

export default FarmerProfile;
