import React, { useState } from 'react';
import image from "./images/eliott.jpg";
import image1 from "./images/child.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/lotus.jpg";
import EachReview from './EachReview';
import "../Review/review.css";
import { FaGreaterThan, FaLessThan  } from "react-icons/fa";
export default function Review(){
    

    var reviewList=[{'image':"https://codevidhya.com/wp-content/uploads/2021/08/ASPA-ASPASIA-STERGIOPOULOU.jpg",'name':"Hannah Schmitt",'company':"Rubin Snacks",
    'content':"My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot."+
    "She has fun during the lessons and enjoys learning new things!"+"It has been an interesting journey and I really do hope that she will continue coding! Thank you!"}
    ,
    {'image':"https://codevidhya.com/wp-content/uploads/2021/10/image.jpeg",'name':"Aspasis",'company':"Greece",
    'content':"The Python course triggered an interest in computers and coding for my 11-year-old son. The teacher and all the coordinators were approachable and I was particularly happy as the teacher adapted her style and course to suit the students’ way of learning. We had a good experience!"},
    {'image':"https://codevidhya.com/wp-content/uploads/2021/10/image-3.jpeg",'name':"Ketaki Bhat",'company':"United Kingdom",
    'content':"My 8-year-old daughter has started having coding lessons and I must say that she has learned a lot."+
    "She has fun during the lessons and enjoys learning new things!"+"It has been an interesting journey and I really do hope that she will continue coding! Thank you!"},
    {'image':"https://images.ctfassets.net/go6kr6r0ykrq/PsoQ94ZyA6wDGnzSr4CjF/f94e1023dc2fd8a146b1bcccc72879e6/ManuelSousa.jpg",'name':"Sathya",'company':"United Arab Emirates",
    'content':"Thank you so much Codevidhya for being the stepping stone in my Child’s dreams. I have compared with others in the same field and felt that Codevidhya had designed the course levels very well in comparison with others. The trainer is very patient and explains all concepts very well. Thank you once again."}
];
    const[count,setCount]=useState(0);
    const[before,setBefore]=useState(reviewList.length-1);
    const[after,setAfter]=useState(1);
        function LessThan(){
                // before
                if(before<(reviewList.length-1)){
                    setBefore(before+1); 
                    
                }
                else if(before===(reviewList.length-1)){
                    setBefore(0);
                    
                }
            if(count<(reviewList.length-1)){
                setCount(count+1); 
                
            }
            else if(count===(reviewList.length-1)){
                setCount(0);
                
            }
            // after
            if(after<(reviewList.length-1)){
                setAfter(after+1); 
            }
            else if(after===(reviewList.length-1)){
                setAfter(0);
            }  
        }
        function GreaterThan(){
            // before
            if(before>0){
                setBefore(before-1);
            }
            else if(before===0){ 
                setBefore(reviewList.length-1);
            }

            if(count>0){
                setCount(count-1);
            }
            else if(count===0){ 
                setCount(reviewList.length-1);
            }
            // after
            if(after>0){
                setAfter(after-1);
            }
            else if(after===0){ 
                setAfter(reviewList.length-1);
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
        image={reviewList[before].image}
        name={reviewList[before].name}
        company={reviewList[before].company}
        content={reviewList[before].content}/>
    <EachReview IdNameProps="ContentMiddleReview"
        image={reviewList[count].image}
        name={reviewList[count].name}
        company={reviewList[count].company}
        content={reviewList[count].content}/>
    <EachReview 
        image={reviewList[after].image}
        name={reviewList[after].name}
        company={reviewList[after].company}
        content={reviewList[after].content}/>
    </div>
    </section>;
}