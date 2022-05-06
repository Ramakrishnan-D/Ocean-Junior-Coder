import React from "react";
import logoImg from "./logo.svg";
import "./header.css";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <section>
      <div className="navbar">
        <div className="logo">
          <img src={logoImg} alt="logoImg" />
        </div>
        <div className="menu">
          <div className="menus">Home</div>
          <a href="#courses" className="menus">
            Courses
          </a>
          <a href="#aboutUs" className="menus">
            About Us
          </a>
          <div className="menus">FAQ</div>
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
      </div>
    </section>
  );
}
