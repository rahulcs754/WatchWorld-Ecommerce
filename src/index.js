import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import AllProvider from "./Provider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllProvider>
        <App />
      </AllProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
