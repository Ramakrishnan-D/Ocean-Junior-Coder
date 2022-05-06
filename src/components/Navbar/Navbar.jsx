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
          <div className="menus">Courses</div>
          <div className="menus">About Us</div>
          <div className="menus">FAQ</div>
          <div className="menus">Contact</div>
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
