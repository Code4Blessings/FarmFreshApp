import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

const ShopperViewInventory = () => {
    return (
        <div>
            <Header/>
            <Link to='/shopper/dashboard'>go back</Link>
            <div className='shopper-view-inventory-container'>
                <h2>Shane Farms</h2>
                <p>1122 Redwood Ave.</p>
				<p>Oakland, CA 94606</p>
                <div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
};

export default ShopperViewInventory;