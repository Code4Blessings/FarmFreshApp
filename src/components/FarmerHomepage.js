import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const FarmerHomepage = () => {
    return (
        <div className="homepage-container">
            <Header />
            <div className="homepage-links">
                <Link>View Orders</Link>
                <Link to='/farmer/add-inventory'>Add/Edit Inventory</Link>
            </div>
            <div className="homepage-links">
                <Link>Add Upcoming Harvests</Link>
                <Link>View Farm Profile</Link>
            </div>
        </div>
        
    );
}

export default FarmerHomepage;