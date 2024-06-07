import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import MenShoppingCart from "./Components/Men component/MenCartShopping";
import Header from "./Components/Header/Header";
import WomenShoppingCart from "./Components/Women Component/WomenCartShopping";
import ChildShoppingCart from "./Components/Child Component/ChildCartShopping";
import routesArray from "./Routing Path/Routing";
import { ShoppingBagProvider } from "./Components/Context File/ShoppingBagContext";
import { RowData } from "./Components/Women Component/AllCasualWearBrand";
// import { useNavigate } from 'react-router-dom';

const App: React.FC = ({}) => {

  return (
    <ShoppingBagProvider>
    <Router>
      <div className="App">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">
        <Routes>
              {routesArray.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
        </div>
      </div>
    </Router>
    </ShoppingBagProvider>
  );
};

export default App;
