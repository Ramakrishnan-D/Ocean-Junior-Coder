import React, { useState } from "react";
import "./faqSection.css";
import faqData from "./faqData";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export default function FaqSection() {
  const [isClicked, setIsClicked] = useState(0);

  // function TogglePanel() {
  //   const [icon, setIcon] = useState(" IoIosArrowDropdown");
  //   var faq = document.getElementsByClassName("faqQuestionInner");
  //   var dropBtn = document.getElementsByClassName("arrowDrop");
  //   var i;

  //   for (i = 0; i < faq.length; i++) {
  //     faq[i].addEventListener("click", function () {
  //       /* Toggle between adding and removing the "active" class,
  //           to highlight the button that controls the panel */
  //       this.classList.toggle("active");

  //       /* Toggle between hiding and showing the active panel */
  //       var panel = this.nextElementSibling;
  //       if (panel.style.display === "block") {
  //         panel.style.display = "none";

  //         dropBtn.style.innerHTML = " IoIosArrowDropup";
  //       } else {
  //         panel.style.display = "block";
  //       }
  //     });
  //   }
  // }
  function getHeight(index) {
    let els = document.querySelectorAll(".ans");
    console.log(document.body.scrollHeight);
    console.log(els[index].clientHeight);
    return els[index].clientHeight;
  }

  return (
    <div className="faqSection">
      <p>Frequently Asked Questions? (FAQ's)</p>
      {faqData.map((faqData, key) => {
        return (
          <div key={key} className="faqSectionOuter">
            <div className="faqSectionInner">
              <div className="faqQuestion">
                <div
                  className="faqQuestionInner"
                  onClick={() => {
                    getHeight(key);
                    if (isClicked == key + 1) {
                      setIsClicked(0);
                    } else {
                      setIsClicked(key + 1);
                    }
                  }}
                >
                  <p>{faqData.question}</p>
                  <div className="arrowDrop">
                    {isClicked == key + 1 ? (
                      <IoIosArrowDropdown />
                    ) : (
                      <IoIosArrowDropup />
                    )}
                  </div>
                </div>
                <div
                  className="faqAnswer"
                  style={{ height: isClicked == key + 1 ? getHeight(key) : 0 }}
                >
                  <p className="ans" style={{ height: "auto" }}>
                    {" "}
                    {faqData.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
