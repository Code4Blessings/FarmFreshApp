import React from 'react';
import {Link} from 'react-router-dom';
import Header from './components/Header';

const InitialSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <Link to='/farmer'><button className='farmer-sign-in-button'>Farmer Sign In</button></Link>
                <button className='shopper-sign-in-button'>Shopper Sign In</button>
                <p>Create an Account</p>
            </section>
        </div>
    )
};

export default InitialSignInPage;