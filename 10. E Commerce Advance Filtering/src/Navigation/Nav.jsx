import React from "react";
import "./nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Your Search Shoes"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
