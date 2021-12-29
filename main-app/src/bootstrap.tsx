import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Context from "./shared/Observable";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store";

import Utils from "../../microfrontend-utils";


Utils.createOrRegisterContext("ThemeContext");
const ThemeContext=Utils.getContext("ThemeContext");

const theme={
  color:"text-primary",
  align:"text-center",
  style:"display-1"
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Context>
          <Main />
        </Context>
      </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
