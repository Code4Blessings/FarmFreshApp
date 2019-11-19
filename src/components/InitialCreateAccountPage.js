import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const InitialCreateAccountPage = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Create an Account</h2>
                    <Link to='/farmer/register'><button className='farmer-sign-in-button'>I'm a farmer</button></Link>
                    <Link to='/shopper/register'><button className='shopper-sign-in-button'>I'm a shopper</button></Link>
                    <Link to='/'><p>Already have an account? Sign in here.</p></Link>
                </div>
            </section>
        </div>
    )
};

export default InitialCreateAccountPage;