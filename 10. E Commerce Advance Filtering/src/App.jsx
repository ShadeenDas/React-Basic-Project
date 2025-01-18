import React from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/Sidebar";

const App = () => {
  return (
    <>
      <SideBar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
