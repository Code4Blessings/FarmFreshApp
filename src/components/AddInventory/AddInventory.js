import React from "react";
import { formik } from "formik";
import Header from "../Header";
import AddButton from "./images/add-button.png";

const AddInventory = () => {
   return (
      <div className="inventory-container">
        <div className="header">
            <Header />
        </div>
        <div className="add-inventory-title">
            <h1>Add/Inventory</h1>
        </div>
        <div className="input-container">
            <div className="quantity-input">
                <input 
                type="text"
                placeholder="1" />
            </div>
            <div className="inventory-input">
                <input 
                type="text"
                placeholder="Item Name" />
            </div>
            <div className="add-btn">
                <img src={AddButton} alt="plus button"/>
            </div>
        </div>
      </div>

   );
}

export default AddInventory;