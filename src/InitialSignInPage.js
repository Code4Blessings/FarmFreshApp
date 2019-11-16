import React from 'react';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import FarmerSignInButton from './components/FarmerSignInButton';
import ShopperSignInButton from './components/ShopperSignInButton';

const InitialSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <Link to='/farmer'><FarmerSignInButton/></Link>
                <ShopperSignInButton/>
                <p>Create an Account</p>
            </section>
        </div>
    )
};

export default InitialSignInPage;