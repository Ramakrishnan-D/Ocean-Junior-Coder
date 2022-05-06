import React from "react";
import image2 from "./images/image2.jpg";
import "../OnlineCourses/onlineCourses.css";
export default function OnlineCourses() {
  return (
    <section>
      <div className="OnlineCourses">
        <div className="OnlineCoursesImage">
          <h1>Join Online Courses Today</h1>
          <img src={image2} alt="onlinecourseimage" />
        </div>
        <div className="OnlineCoursesContent">
          <h1>
            Join Online Courses <br /> Today
          </h1>
          <p>
            Computer technology and consultancy firm Ocean Academy, a leading
            name in the area of IT education, software production and IT
            services, has graduated more than 5,000 students. The Ocean Academy
            was built from the outset on the concept of constructing and
            introducing brilliant innovations that generate change for students
            and customers. It's the only location where excellence and
            technology intersect.
          </p>
          <button type="button">Read More</button>
        </div>
      </div>
    </section>
  );
}
