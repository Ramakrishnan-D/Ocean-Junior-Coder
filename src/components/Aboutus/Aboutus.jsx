import React from 'react';
import image from './images/child.png';
import "../Aboutus/aboutus.css";
export default function Aboutus(){
    return <section>
        <div className='AboutusMain'>
        <div className='AboutusContentMain'>
            <div className='AboutusContent'>
                <h1>Ocean Kids Coding</h1>
                <p>
                Computer technology and consultancy firm Ocean Academy, a leading name in the area of IT education,
                 software production and IT services, has graduated more than 5,000 students. 
                The Ocean Academy was built from the outset on the concept of constructing and introducing brilliant 
                innovations that generate change for students and customers. It's the only location where excellence and 
                technology intersect. 
                </p>
            </div>
        </div>
            <div className='AboutusImage'>
                <img src={image} alt="aboutimage"/>
            </div>
        </div>
        
    </section>
}