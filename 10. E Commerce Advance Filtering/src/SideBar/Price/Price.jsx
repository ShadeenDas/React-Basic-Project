import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>$0- $50
      </label>
    </div>
  );
};

export default Price;
