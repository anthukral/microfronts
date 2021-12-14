import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
//import Product from "./Product";
//const App = () => <Product />;

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <h1>App WORKS</h1>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
