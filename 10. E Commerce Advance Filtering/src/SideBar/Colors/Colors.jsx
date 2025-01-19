import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h1 className="sidebar-title color-title ">Colors</h1>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test1"
        color="black"
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>{" "}
        White
      </label>
    </div>
  );
};

export default Colors;
