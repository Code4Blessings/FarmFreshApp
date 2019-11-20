import React from 'react';
import {Link} from 'react-router-dom';
import pumpkin from '../pumpkin.png';
import HeaderWithLogOut from './HeaderWithLogOut';

const ShopperViewInventory = () => {
    // get request will store data in state, i think, and disburse that data everywhere in this file
    return (
        <div>
            <HeaderWithLogOut/>
            <div className='shopper-view-inventory-container'>
                <Link to='/shopper/dashboard'>go back</Link>
                <h2>Shane Farms</h2>
                <h3>1122 Redwood Ave. Oakland, CA 94606</h3>
                <div className='products'>
                    <div className='product-row'>
                        <img src={pumpkin} alt='pumpkin'></img>
                        <div>
                            <p>Organic Pumpkin</p>
                            <p>Available: 56 units</p>
                            <p>Quantity:</p>
                            {/* can set a restriction so that you dont order more than available */}
                        </div>
                    </div>
                    <div className='product-row'>
                        <img src={pumpkin} alt='pumpkin'></img>
                        <div>
                            <p>Organic Pumpkin</p>
                            <p>Available: 56 units</p>
                            <p>Quantity:</p>
                            {/* can set a restriction so that you dont order more than available */}
                        </div>
                    </div>
                    <div className='product-row'>
                        <img src={pumpkin} alt='pumpkin'></img>
                        <div>
                            <p>Organic Pumpkin</p>
                            <p>Available: 56 units</p>
                            <p>Quantity:</p>
                            {/* can set a restriction so that you dont order more than available */}
                        </div>
                    </div>
                </div>
                <button className='farmer-sign-in-button'>Order</button>
            </div>
        </div>
    )
};

export default ShopperViewInventory;