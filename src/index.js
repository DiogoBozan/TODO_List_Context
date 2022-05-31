import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./components/Parent";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);
