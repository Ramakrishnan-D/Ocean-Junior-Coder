import React from "react";
import "./specialFeatures.css";
import featureIcon from "./featureIcon.png";

export default function SpecialFeatures() {
  return (
    <div className="specialFeaturesOuter">
      <div className="featuresParts">
        <div className="featuresPart1">
          <div className="featuresIconPart1">
            <div className="featuresModel">
              <img className="featureIcon" src={featureIcon} alt="" />
              <p>Lorem ipsum </p>
            </div>
            <div className="featuresModel">
              <img className="featureIcon" src={featureIcon} alt="" />
              <p>Lorem ipsum </p>
            </div>
            <div className="featuresModel">
              <img className="featureIcon" src={featureIcon} alt="" />
              <p>Lorem ipsum </p>
            </div>
          </div>

          <div className="featuresIconPart2">
            <div className="featuresModel">
              <img className="featureIcon" src={featureIcon} alt="" />
              <p>Lorem ipsum </p>
            </div>
            <div className="featuresModel">
              <img className="featureIcon" src={featureIcon} alt="" />
              <p>Lorem ipsum </p>
            </div>
            <div className="featuresModel">
              <img className="featureIcon" src={featureIcon} alt="" />
              <p>Lorem ipsum </p>
            </div>
          </div>
        </div>
        <div className="featuresPart2">
          <div className="featuresPart2Inner">
            <h1>Lorem ipsum dolor adipi</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, consequatur eius voluptatibus id sequi temporibus
              nostrum tempora quasi blanditiis magnam, commodi ipsa ratione?
              Laudantium excepturi iusto nam blanditiis provident non! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
              consequatur eius voluptatibus id sequi temporibus nostrum tempora
              quasi blanditiis magnam, commodi ipsa ratione? Laudantium
              excepturi iusto nam blanditiis provident non!
            </p>
            <div className="featureKnowMoreBtn">Know More</div>
          </div>
        </div>
      </div>
    </div>
  );
}
