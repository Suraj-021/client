import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //For Creating Single Page Application
import reportWebVitals from "./reportWebVitals";
import { Authprovider } from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Authprovider>
);

reportWebVitals();
