import React from "react";
import "./Footer.css";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import DropDown from "../DropDown/DropDown.jsx";
export default function Footer() {
  return (
    <section id="footer" className="FooterSection">
      <div className="Logo">
        <h3>Ocean Kids Coding</h3>
        <p>
          Ocean Academy – computer education and consulting company, a pioneer
          name in IT Education, software development and IT services industry
          and we trained more than 5000 Students. From the beginning, the Ocean
          was founded on the principle of building and implementing great ideas
          that drive progress for the students and clients. It’s the only place
          where technology and excellence meets.
        </p>
      </div>

      <div className="FooterLink">
        <a href="#home">Home</a>
        <a href="#aboutUs">About Us</a>
        <a href="#courses">Courses</a>
        <a href="#Team">Team</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="FooterContact">
        <p>CONTACT</p>
        <div className="FooterIcon">
          <div>
            <AiFillPhone className="Icon" />{" "}
          </div>{" "}
          <p>0413-2240580 </p>
        </div>
        <div className="FooterIcon">
          <div>
            <AiFillMail className="Icon" />{" "}
          </div>
          <p>info@oceanacademy.in </p>
        </div>
        <div className="FooterIcon">
          <div>
            <ImLocation2 className="Icon" />{" "}
          </div>
          <p>
            {" "}
            No.10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC Bank,
            Saram, Puducherry-605013.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
