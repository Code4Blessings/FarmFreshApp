import React from 'react';
import {Link} from 'react-router-dom';
import HeaderWithLinkBackToLandingPage from './HeaderWithLinkBackToLandingPage';
import {gsap} from 'gsap';

const InitialSignInPage = () => {
    let slideButton1 = useRef(null);
    let slideButton2 = useRef(null);
    
    useEffect(() => {
        gsap.to(slideButton1,{ duration: 3.5, ease: "back.in(1.0)", y: 90 });
        gsap.to(slideButton2,{ duration: 3.5, ease: "back.in(1.0)", y: -80 });
    },[])
    
    return (
        <div>
            <HeaderWithLinkBackToLandingPage/>
            <section className='initial-sign-in-page-section'>
                <div id='content'>
                    <h2>Welcome!</h2>

                   <Link to='/shopper/login'><button className='shopper-sign-in-button' ref={button1 => {slideButton1 = button1}}>Shopper Sign In</button></Link>

                    <Link to='/farmer/login'><button className='farmer-sign-in-button' ref={button2 => { slideButton2 = button2 }}>Farmer Sign In</button></Link>

                    <Link to='/register'><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default InitialSignInPage;