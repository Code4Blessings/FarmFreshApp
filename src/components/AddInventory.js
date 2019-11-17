import React from "react";
import Header from "./Header";

const AddInventory = () => {
   return (
      <div className="inventory-container">
        <div className="header">
            <Header />
        </div>
        <div className="add-inventory">
            <h1>Add/Inventory</h1>
        </div>
      </div>

   );
}

export default AddInventory;