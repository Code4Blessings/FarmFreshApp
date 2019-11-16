import React from 'react';
import Header from './components/Header';
import SignInButton from './components/SignInButton';

const FarmerSignInPage = () => {
    return (
        <div>
            <Header/>
            <section className='farmer-and-shopper-sign-in-page-section'>
                <h2>Sign In</h2>
                {/* form will be specific to the page i think */}
                <form>
                    <input></input>
                </form>
                <SignInButton/>
                <p>Create an Account</p>
            </section>
        </div>
    )
};

export default FarmerSignInPage;