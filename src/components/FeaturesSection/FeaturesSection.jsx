import React from "react";
import featuresData from "./featuresData";
import "./features.css";

export default function FeaturesSection() {
  return (
    <div className="featuresOuter">
      <div className="featuresSection">
        {featuresData.map((featuresValue, index) => {
          return (
            <div>
              <img
                className="featureImg"
                src={featuresValue.image}
                alt="feature-Image"
              />
              <p>{featuresValue.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
