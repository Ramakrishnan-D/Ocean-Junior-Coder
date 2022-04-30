import React from "react";
import "./faqSection.css";
import faqData from "./faqData";
import { IoIosArrowDropdown } from "react-icons/io";

export default function FaqSection() {
  function TogglePanel() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }
  return (
    <div className="faqSection">
      <h1>Frequently Asked Questions? (FAQ's)</h1>
      {faqData.map((faqData, key) => {
        return (
          <div className="faqSectionOuter">
            <div className="faqSectionInner">
              <div className="faqQuestion">
                <div className="faqQuestionInner">
                  <p>{faqData.question}</p>
                  <div>
                    <IoIosArrowDropdown className="arrowDropdown" />
                  </div>
                </div>
                <div className="faqAnswer">{faqData.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
