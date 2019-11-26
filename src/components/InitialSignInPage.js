import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import HeaderWithLinkBackToLandingPage from './HeaderWithLinkBackToLandingPage';
import {TweenMax, Power3} from 'gsap';

const InitialSignInPage = () => {
    let welcome = useRef(null);
    let farmerSignIn = useRef(null);
    let shopperSignIn = useRef(null);
    let createAccount = useRef(null);
    
    useEffect(() => {
        TweenMax.to(
            welcome,
            1,
            {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut
            }
        );
        TweenMax.to(
            farmerSignIn,
            1,
            {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut
            }
        );
        TweenMax.to(
            shopperSignIn,
            1,
            {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut
            }
        );
        TweenMax.to(
            createAccount,
            1,
            {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut
            }
        );
    },[])
    
    return (
        <div>
            <HeaderWithLinkBackToLandingPage/>
            <section className='initial-sign-in-page-section'>
                <div id='content'>
                    <h2 className='invisible' ref={element => {welcome = element}}>Welcome!</h2>

                    <Link to='/shopper/login' className='invisible' ref={element => {farmerSignIn = element}}><button className='shopper-sign-in-button'>Shopper Sign In</button></Link>

                    <Link to='/farmer/login' className='invisible' ref={element => {shopperSignIn = element}}><button className='farmer-sign-in-button'>Farmer Sign In</button></Link>

                    <Link to='/register' className='invisible' ref={element => {createAccount = element}}><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default InitialSignInPage;