import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./components/App";

let a = 0;
window.addEventListener("scroll", () => {
  let scroll = parseInt(window.scrollY);
  // console.log(scroll);
  a = scroll;
  if (scroll > 100) {
    document.querySelector("navbar").style.position = "fixed";
    document.querySelector("navbar").style.top = "-100px";
  }
  if (scroll > 160) {
    document.querySelector("navbar").style.top = "0px";
    document.querySelector("navbar").className = "navbar-fixed";
  }
  if (scroll < 160) {
    document.querySelector("navbar").className = "";
  }
  if (scroll < 100) {
    // document.querySelector("navbar").style.position = "fixed";
    document.querySelector("navbar").style.top = "0px";
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
