import React from 'react';
import "../Review/review.css";
import image from "./images/eliott.jpg";
import { FaQuoteLeft  } from "react-icons/fa";
export default function EachReview(props){
    return<section className='Review'>
        <div className='EachReview'>
            <div className='ReviewPersonImage'>
                <img src={props.image} alt="personImage"/>
            </div>
            <div className='ReviewPersonTitle'>
                <h1>{props.name}</h1>
                <p>{props.company}</p>
             </div>
            <div className='ReviewQuotes'>
            <FaQuoteLeft className='LeftQuote'/>  
            </div>
            <div className='ReviewContent'>
                <p>
                 {props.content}
                </p>
            </div>
        </div>

    </section>;
}