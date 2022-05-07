import React, { useState } from "react";
import logoImg from "./logo.svg";
import "./header.css";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  function registerPopUp() {
    const id = setInterval(() => {
      document.getElementById("RegisterPopUp").style.display = "block";
    });
    setTimeout(() => {
      clearInterval(id);
      document.getElementById("RegisterPopUp").style.display = "none";
      console.log("hello");
    }, 10000);
  }
  return (
    <navbar>
      <div className="logo">
        <img src={logoImg} alt="logoImg" />
      </div>
      <div className="menu">
        <a href="#home" className="menus">
          Home
        </a>
        <a href="#courses" className="menus">
          Courses
        </a>
        <a href="#aboutUs" className="menus">
          About Us
        </a>
        <a href="#faq" className="menus">
          FAQ
        </a>
        <a href="#footer" className="menus">
          Contact
        </a>
      </div>
      <div className="login">
        <div className="registerParent">
          <div className="register" onClick={registerPopUp}>
            Register
            <div id="RegisterPopUp" className="RegisterPopUp">
              <input type="text" placeholder="Email" /> <br />
              <input type="text" placeholder="Password" /> <br />
              <input type="text" placeholder="Confirm Password" /> <br />
              <button type="button">Register </button>
            </div>
          </div>
        </div>
        <div className="signInParent">
          <div className="signIn">Sign In</div>
        </div>
      </div>
      <div className="menuSymbol">
        <FiMenu />
      </div>
    </navbar>
  );
}
