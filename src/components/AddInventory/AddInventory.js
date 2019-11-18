import React from "react";
import { formik } from "formik";
import Header from "../Header";
import AddButton from "./images/add-button.png";
import "./AddInventory.css";

const AddInventory = () => {
   return (
      <div className="inventory-container">
        <div className="header">
            <Header />
        </div>
        <div className="add-inventory-title">
            <h1>Add/Inventory</h1>
        </div>
        <form className="inventory-form">
            <input className="quantity-inventory"
            type="text"
            placeholder="1" />
                <input className="inventory-input"
                type="text"
                placeholder="Item Name" />
            <button className="add-btn">+</button>
        </form>
      </div>

   );
}

export default AddInventory;