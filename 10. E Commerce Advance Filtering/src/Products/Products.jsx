import React from "react";
import "./products.css";

import Card from "../components/Card";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default Products;
