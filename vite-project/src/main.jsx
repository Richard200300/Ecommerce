import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./body";
import "../src/style/index.css";
import "./style/fonts/kumbh-sans-font.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>
      <Body />
    </h1>
  </React.StrictMode>
);

