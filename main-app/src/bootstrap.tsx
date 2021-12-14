import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Context from "./shared/Observavle";
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Main />
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
