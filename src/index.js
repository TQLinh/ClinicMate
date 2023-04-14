import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./Styles/index.scss";
import { StepProvider } from "./context/stepContext";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StepProvider>
      <App />
    </StepProvider>
    <ToastContainer />
  </BrowserRouter>
);
