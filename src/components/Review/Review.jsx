import React, { useRef, useState } from "react";
import "../Review/review.css";
import reviewList from "./reviewlist";
import { FaGreaterThan, FaLessThan, FaQuoteLeft } from "react-icons/fa";
export default function Review() {
  const [size, setSize] = useState(0);
  const [select, setSelect] = useState(1);
  const value = document.getElementsByClassName("ParentMainReviewContent");
  const testRef = useRef(null);

  // [0]
  //   .clientWidth;

  function increase() {
    if (size >= 0) {
      setSize(size - 1);
      setSelect(select - 1);
      console.log(testRef.current);
    }
  }
  function decrease() {
    console.log(value[0]);
    if (size < reviewList.length - 2) {
      setSize(size + 1);
      setSelect(select + 1);
    }
  }

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
        style={{ width: `${420 * 3 + "px"}` }}
      >
        <div
          className="MainReviewContent"
          style={{ left: `${-(410 * size) + "px"}` }}
        >
          {reviewList.map((reviewValue, index) => {
            return (
              <div
                id={`${index}`}
                className={`EachReview ${select === index && "isSelect"}`}
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
