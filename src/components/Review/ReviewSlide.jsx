import React, { useState } from 'react';
import "../Review/review.css";
import reviewList from "./reviewlist";
export default function ReviewSlide(){
    var Total=[1,2,3,4,5]
    var list=Total.map((eachObject)=>{
        <p>{eachObject}</p>
        });
    return<section className='MainReview'>
    <div className='MainReviewContent'>
    {reviewList.map((Each)=> {return })}
    </div>
    </section>;
}