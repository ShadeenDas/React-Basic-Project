import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <>
      <div className="logo-container">
        <h1></h1>
      </div>
      <Category />
    </>
  );
};

export default Sidebar;
