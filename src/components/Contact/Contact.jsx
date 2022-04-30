import React from "react";
import image from "./image/image1.jpg";
import "./Contact.css";
export default function Contact(){
    return <section className="ContactSection">
        <div className="ContactImage">
            <img src={image} alt="contactImage"/>
        </div>
        <div className="ContactForm">
            <h1>CONTACT US</h1>
            <input type ="text" placeholder="Name"/> <br/> 
            <input type ="text" placeholder="Email"/> <br/> 
            <input className="Message" type ="text" placeholder="Message" /><br/> 
            <button type="button">SUBMIT</button>
        </div>
    

    </section>;
}