import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import getStore from "./Store";

import renderRoutes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <BrowserRouter>{renderRoutes()}</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
