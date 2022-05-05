import React from "react";
import ReactDOM from "react-dom";
import { App } from "app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Authorization } from "features/authorization";

ReactDOM.render(
  <React.StrictMode>
    <Authorization>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authorization>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
