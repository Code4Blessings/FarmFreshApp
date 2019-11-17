import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const InitialSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <h2>Welcome!</h2>
                <Link to='/farmer/login'><button className='farmer-sign-in-button'>Farmer Sign In</button></Link>
                <Link to='/shopper/login'><button className='shopper-sign-in-button'>Shopper Sign In</button></Link>
                <p>Create an Account</p>
            </section>
        </div>
    )
};

export default InitialSignInPage;