import React from "react";
import {formik} from "formik";
import Header from "./Header";

const AddInventory = () => {
   return (
        <div>
        
            <Header />
            
            <section className="inventory-container">
                <h2>Add/Edit Inventory</h2>
            
                <form className="inventory-form">
                    <input className="quantity-inventory" type="number" placeholder="1pc"/>
                    <input className="inventory-input" type="text" placeholder="Item Name"/>
                    <button className="add-btn">+</button>
                </form>

                <h2>Current Inventory</h2>

                <div className='table'>
                    <p>Hello!!!!!!</p>
                    <p>Item</p>
                    <p>Quantity</p>
                </div>
                
                <div className='table-contents'>
                    <div className='table-row'>
                        <p>edit</p>
                        <p>Pumpkins</p>
                        <p>15</p>
                    </div>
                    <div className='table-row'>
                        <p>edit</p>
                        <p>Squash</p>
                        <p>20</p>
                    </div>
                    <div className='table-row'>
                        <p>edit</p>
                        <p>Corn</p>
                        <p>100</p>
                    </div>
                </div>

                <button className='farmer-sign-in-button'>Save Changes</button>

            </section>
        </div>
   );
}

export default AddInventory;