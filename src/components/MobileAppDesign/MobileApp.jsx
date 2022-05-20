import React from "react";
import "./MobileApp.css";
export default function MobileApp() {
  return (
    <section className="MobileApp">
      <div className="FirstContent">
        <div className="FirstContentChild">
          <h1>Mobile App Features</h1>{" "}
        </div>
        <div className="FirstContentChild">
          <p>
            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
            suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
            metus sollicitudin. Quisque vitae sodales lectus.
          </p>
        </div>
      </div>
      <div className="SecondContent">
        <div className="LeftContent" data-aos="fade-down-right">
          <div className="MobileFeatures">
            <h3>Theme Options</h3>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
          <div className="MobileFeatures">
            <h3>Customization</h3>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
        </div>
        <div className="mobileParent" data-aos="zoom-in">
          <div className="mobileImage">
            <div className="mobileImageContent">
              <p>Ocean Kids Coding</p>
            </div>
          </div>
        </div>
        <div className="RightContent" data-aos="fade-down-left">
          <div className="MobileFeatures">
            <h3>Powerful Code</h3>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
          <div className="MobileFeatures">
            <h3>Documentation</h3>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
