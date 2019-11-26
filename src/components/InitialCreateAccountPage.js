import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import {gsap, TweenMax, Power3} from 'gsap';
gsap.registerPlugin(TweenMax, Power3);

const InitialCreateAccountPage = () => {
    let createAnAccount = useRef(null);
    let imAFarmer = useRef(null);
    let imAShopper = useRef(null);
    let signIn = useRef(null);
    
    useEffect(() => {
        TweenMax.to(createAnAccount, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.1
            }
        );
        TweenMax.to(imAFarmer, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.2
            }
        );
        TweenMax.to(imAShopper, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.3
            }
        );
        TweenMax.to(signIn, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.4
            }
        );
    }, [])
    
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2 className='invisible' ref={element => {createAnAccount = element}}>Create an Account</h2>
                    <Link to='/farmer/register' className='invisible' ref={element => {imAFarmer = element}}><button className='farmer-sign-in-button'>I'm a farmer</button></Link>
                    <Link to='/shopper/register' className='invisible' ref={element => {imAShopper = element}}><button className='shopper-sign-in-button'>I'm a shopper</button></Link>
                    <Link to='/' className='invisible' ref={element => {signIn = element}}><p>Already have an account? Sign in here.</p></Link>
                </div>
            </section>
        </div>
    )
};

export default InitialCreateAccountPage;