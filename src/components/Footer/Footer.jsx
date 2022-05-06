import React from "react";
import "./Footer.css";
import { FaMobile, FaMailBulk, FaSearchLocation } from "react-icons/fa";
import DropDown from "../DropDown/DropDown.jsx";
export default function Footer() {
  return (
    <section className="FooterSection">
      <div className="Logo">
        <h3>Ocean Kids Coding</h3>
        <p>
          Ocean was founded on the principle of building, and implementinggreat
          ideas that drive progress for the students ond clients.
        </p>
      </div>

      <div className="FooterLink">
        <a href="#Homepage.jsx">Home</a>
        <a href="#Aboutus.jsx">About Us</a>
        <a href="CourseList.jsx">Courses</a>
        <a href="Team.jsx">Team</a>
        <a href="Contact.jsx">Contact</a>
      </div>

      <div className="FooterContact">
        <p>CONTACT</p>
        <div className="FooterIcon">
          <div>
            <FaMobile className="Icon" />{" "}
          </div>{" "}
          <p>0413-2240580 </p>
        </div>
        <div className="FooterIcon">
          <div>
            <FaMailBulk className="Icon" />{" "}
          </div>
          <p>info@oceanacademy.in </p>
        </div>
        <div className="FooterIcon">
          <div>
            <FaSearchLocation className="Icon" />{" "}
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
