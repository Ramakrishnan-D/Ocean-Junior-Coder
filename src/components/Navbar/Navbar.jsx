import React from "react";
import logoImg from "./logo.svg";
import "./header.css";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
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
        <div className="register">Register</div>
        <div className="signIn">Sign In</div>
      </div>
      <div className="menuSymbol">
        <FiMenu />
      </div>
    </navbar>
  );
}
