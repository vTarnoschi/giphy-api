import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import getStore from "./Store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
