import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const FarmerHomepage = () => {
    return (
        <div className="homepage-container">
            <div className="header">
                <Header />
            </div>
            <div className="homepage-links">
                <Link>View Orders</Link>
                <Link>Add/Edit Inventory</Link>
            </div>
            <div className="homepage-links">
                <Link>Add Upcoming Harvests</Link>
                <Link>View Farm Profile</Link>
            </div>
        </div>
        
    );
}

export default FarmerHomepage;