import React from 'react';
import Header from './components/Header';
import FarmerSignInButton from './components/FarmerSignInButton';
import ShopperSignInButton from './components/ShopperSignInButton';

const InitialSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <FarmerSignInButton/>
                <ShopperSignInButton/>
                <p>Create an Account</p>
            </section>
        </div>
    )
};

export default InitialSignInPage;