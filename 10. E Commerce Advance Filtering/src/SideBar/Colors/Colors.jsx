import React from "react";
import "./Colors.css";

const Colors = () => {
  return (
    <div>
      <h1>Colors</h1>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>All
      </label>
    </div>
  );
};

export default Colors;
