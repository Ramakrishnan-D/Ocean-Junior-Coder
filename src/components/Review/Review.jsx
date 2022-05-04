import React, { useState } from 'react';
import image from "./images/eliott.jpg";
import image1 from "./images/child.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/lotus.jpg";
import EachReview from './EachReview';
import "../Review/review.css";
import reviewList from './reviewlist';
import { FaGreaterThan, FaLessThan, FaQuoteLeft } from "react-icons/fa";
export default function Review(){
    const[size,setSize]=useState(0);
    const[select,setSelect]=useState(1);
    function increase(){
        if(size>=0){
            setSize(size-1);
            setSelect(select-1);
        }
        // else if(size==0){
        //     setSize(reviewList.length-1);
        //     setSelect(reviewList.length-1);
        // } 
    }
    function decrease(){
       
        if( size<reviewList.length-2){
            setSize(size+1);
            setSelect(select+1);
        }
        // else if(size==reviewList.length-1){
        //     setSize(0);
        //     setSelect(0);
        // }
    }
    return<section className='MainReview'>
    <div className='MainReviewTitle' >

    <FaLessThan className='FaLessThan'  onClick={increase}/>
        <h1>Review</h1> 
    <FaGreaterThan className='FaGreaterThan' onClick={decrease}/>
    </div>
    <div className='ParentMainReviewContent' style={{width:`${(410*3)+80+"px"}`}}>
        <div className='MainReviewContent' style={{left:`${-(410*size)+"px"}`}}>
        {reviewList.map((reviewValue,index) => { 
            return <div  className={`EachReview ${select===index && "isSelect"}`} key={index}>
            <div className='ReviewPersonImage'>
                <img src={reviewValue.image} alt="personImage"/>
            </div>
            <div className='ReviewPersonTitle'>
                <h1>{reviewValue.name}</h1>
                <p>{reviewValue.company}</p>
             </div>
            <div className='ReviewQuotes'>
            <FaQuoteLeft className='LeftQuote'/>  
            </div>
            <div className='ReviewContent'>
                <p>
                 {reviewValue.content}
                </p>
            </div>
        </div>})}
        </div>
    </div>
    </section>;
}


