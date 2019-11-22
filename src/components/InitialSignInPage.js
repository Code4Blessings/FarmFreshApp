import React from 'react';
import {Link} from 'react-router-dom';
import HeaderWithLinkBackToLandingPage from './HeaderWithLinkBackToLandingPage';
import {gsap, TweenMax} from 'gsap';

if (document.readyState === "interactive" || document.readyState === "complete") {
    resolve();
} else {
    window.addEventListener("DOMContentLoaded", resolve);
}

function resolve() {
    document.body.removeAttribute("unresolved");

    TweenMax.from("#content", 1, {
        opacity: -2,
        y: 100
    });
}


const InitialSignInPage = () => {
    return (
        <div>
            <HeaderWithLinkBackToLandingPage/>
            <section className='initial-sign-in-page-section'>
                <div id='content'>
                    <h2>Welcome!</h2>

                   <Link to='/shopper/login'><button className='shopper-sign-in-button'>Shopper Sign In</button></Link>

                    <Link to='/farmer/login'><button className='farmer-sign-in-button'>Farmer Sign In</button></Link>

                    <Link to='/register'><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default InitialSignInPage;