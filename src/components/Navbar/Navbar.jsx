import React, { useState } from "react";
import logoImg from "./logo.svg";
import "./header.css";
import { FiMenu } from "react-icons/fi";
import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
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

  function mouseOverFn(e) {
    // console.log(e.target.id);

    document.getElementById(e.target.id).style.color = "#e0c633";
  }
  function mouseLeaveFn(e) {
    document.getElementById(e.target.id).style.color = "#ffff";
  }

  return (
    <navbar>
      <div className="logo">
        <img src={logoImg} alt="logoImg" />
      </div>
      <div id="menu" className="menu">
        <a
          id="menu1"
          onMouseOver={mouseOverFn}
          onMouseLeave={mouseLeaveFn}
          href="#home"
          className="menus"
        >
          <AiFillHome />
        </a>
        <a
          id="menu2"
          onMouseOver={mouseOverFn}
          onMouseLeave={mouseLeaveFn}
          href="#courses"
          className="menus"
        >
          <MdCastForEducation />
        </a>
        <a
          id="menu3"
          onMouseOver={mouseOverFn}
          onMouseLeave={mouseLeaveFn}
          href="#aboutUs"
          className="menus"
        >
          <BsPersonFill />
        </a>
        <a
          id="menu4"
          onMouseOver={mouseOverFn}
          onMouseLeave={mouseLeaveFn}
          href="#faq"
          className="menus"
        >
          <FaQuestionCircle />
        </a>
        <a
          id="menu5"
          onMouseOver={mouseOverFn}
          onMouseLeave={mouseLeaveFn}
          href="#footer"
          className="menus"
        >
          <AiFillPhone />
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
