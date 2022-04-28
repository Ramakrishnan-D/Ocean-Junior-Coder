import React from "react";
import BenefitsImg from "./BenefitsImg.png";
import "./benefits.css";
export default function BenefitsSection() {
  return (
    <section>
      <div className="benefitsSection">
        <h1>Benefits of coding</h1>

        <img src={BenefitsImg} alt="BenefitsImage" />
      </div>
    </section>
  );
}
