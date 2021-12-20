import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Routes, Route } from "react-router";
import Product from "./Product";
//const App = () => <Product />;
import { NavigationHelper } from "./imports";
ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <NavigationHelper />
      <Routes>
        <Route path="/login" />
        <Route path="/" element={<Product />} />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
