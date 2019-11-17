import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const InitialSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Welcome!</h2>
                    <Link to='/farmer/login'><button className='farmer-sign-in-button'>Farmer Sign In</button></Link>
                    <Link to='/shopper/login'><button className='shopper-sign-in-button'>Shopper Sign In</button></Link>
                    <Link to='/shopper/register'><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default InitialSignInPage;