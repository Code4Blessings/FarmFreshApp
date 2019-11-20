import React from 'react';
import {Link} from 'react-router-dom';

const HeaderWithLogOut = () => {
    return (
        <section className='header-with-log-out'>
            <Link to='/'><h1>Farm Fresh</h1></Link>
            <Link to='/' onClick={() => localStorage.removeItem('token')}><button className='log-out-button'>Log Out</button></Link>
        </section>
    )
};

export default HeaderWithLogOut;