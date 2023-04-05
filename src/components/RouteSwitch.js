import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Store from "./Store";
import Home from "./Home";
import "../style/mainLayout.css";
import ShoppingCart from "./ShoppingCart";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <div className="mainLayout">
        <Header cartConfig={props}></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store cartConfig={props} />} />
          <Route
            path="/checkout"
            element={<ShoppingCart cartConfig={props} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
