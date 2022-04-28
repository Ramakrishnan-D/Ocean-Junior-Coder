import React, { useState } from 'react';
import image from "./images/eliott.jpg";
import image1 from "./images/child.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/lotus.jpg";
import EachReview from './EachReview';
import "../Review/review.css";
import { FaGreaterThan, FaLessThan  } from "react-icons/fa";
export default function Review(){
    const[count,setCount]=useState(0);

    var reviewList=[{'image':image,'name':"Hannah Schmitt",'company':"Rubin Snacks",
    'content':"My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot."+
    "She has fun during the lessons and enjoys learning new things!"+"It has been an interesting journey and I really do hope that she will continue coding! Thank you!"}
    ,
    {'image':image1,'name':"AAAAA",'company':"Rubin Snacks",
    'content':"My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot."+
    "She has fun during the lessons and enjoys learning new things!"+"It has been an interesting journey and I really do hope that she will continue coding! Thank you!"},
    {'image':image2,'name':"BBBBB",'company':"Rubin Snacks",
    'content':"My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot."+
    "She has fun during the lessons and enjoys learning new things!"+"It has been an interesting journey and I really do hope that she will continue coding! Thank you!"},
    {'image':image3,'name':"CCCC",'company':"Rubin Snacks",
    'content':"My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot."+
    "She has fun during the lessons and enjoys learning new things!"+"It has been an interesting journey and I really do hope that she will continue coding! Thank you!"}
];
        function LessThan(){
            if(count<(reviewList.length-1)){
                setCount(count+1); 
                console.log(count);
            }
            else if(count===(reviewList.length-1)){
                setCount(0);
            }
           
        }
        function GreaterThan(){
            if(count>0){
                setCount(count-1);
            }
            else if(count===0){ 
                setCount(reviewList.length-1);
            }
        }  
    return<section className='MainReview'>
    <div className='MainReviewTitle' >
    <FaLessThan className='FaLessThan' onClick={LessThan} />
        <h1>Review</h1> 
    <FaGreaterThan className='FaGreaterThan' onClick={GreaterThan}/>
    </div>
    <div className='MainReviewContent'>
    <EachReview 
        image={reviewList[count].image}
        name={reviewList[count].name}
        company={reviewList[count].company}
        content={reviewList[count].content}/>
    </div>
    </section>;
}