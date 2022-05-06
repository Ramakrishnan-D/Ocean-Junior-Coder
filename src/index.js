import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./components/App";

let a = 0;
window.addEventListener("scroll", () => {
  let scroll = parseInt(window.scrollY);
  console.log(scroll);
  a = scroll;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
