import React, { useRef, useState } from "react";
import "../Review/review.css";
import reviewList from "./reviewlist";
import { FaGreaterThan, FaLessThan, FaQuoteLeft } from "react-icons/fa";
export default function Review() {
  const [size, setSize] = useState(0);
  const [select, setSelect] = useState(1);
  const [widthValue, setWidthValue] = useState(0);
  const [leftValue, setLeftValue] = useState(`-0px`);
  const value = document.getElementsByClassName("ParentMainReviewContent");
  const testRef = useRef(null);

  function increase() {
    if (size >= 0) {
      setSize(size - 1);
      setSelect(select - 1);
    }
  }
  function decrease() {
    if (size < reviewList.length - 2) {
      setSize(size + 1);
      setSelect(select + 1);
    }
  }
  function getCurrentWidth() {
    var width = document.getElementsByClassName("EachReview")[0].clientWidth;
    setWidthValue(width + 60);
    console.log("widthValue is " + width);
  }
  function setLeft() {
    var leftValue1 = `${-(widthValue * size) + "px"}`;
    setLeftValue(leftValue1);
  }
  console.log("left value is " + leftValue);
  return (
    <section className="MainReview">
      <div className="MainReviewTitle">
        <FaLessThan className="FaLessThan" onClick={increase} />
        <h1>Review</h1>
        <FaGreaterThan className="FaGreaterThan" onClick={decrease} />
      </div>
      <div
        ref={testRef}
        className="ParentMainReviewContent"
        style={{ width: `${widthValue * 3 + "px"}` }}
      >
        <div className="MainReviewContent" style={{ left: leftValue }}>
          {reviewList.map((reviewValue, index) => {
            return (
              <div
                id={`${index}`}
                className={`EachReview ${select === index && "isSelect"}`}
                onLoad={getCurrentWidth}
                draggable="true"
                onDrag={setLeft}
              >
                <div className="ReviewPersonImage">
                  <img src={reviewValue.image} alt="personImage" />
                </div>
                <div className="ReviewPersonTitle">
                  <h1>{reviewValue.name}</h1>
                  <p>{reviewValue.company}</p>
                </div>
                <div className="ReviewQuotes">
                  <FaQuoteLeft className="LeftQuote" />
                </div>
                <div className="ReviewContent">
                  <p>{reviewValue.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
