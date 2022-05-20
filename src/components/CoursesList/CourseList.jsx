import React from "react";
import courseList from "./courseList.js";
import "./courseList.css";

export default function CourseList(props) {
  return (
    <div id="courses" className="coursesListOutermost">
      <p> Courses</p>
      <div className="coursesListsOuter">
        <div className="coursesLists">
          {courseList.map((value, index) => {
            return (
              <div className="courseComponent" data-aos="zoom-in">
                <div className="courseName">{value.courseName}</div>
                <div className="ageSlot">
                  <div>Ages {value.age}</div>
                  <div>select</div>
                </div>
                <div className="level">
                  <div>
                    <img src="" alt="" />

                    {value.levels.map((levelValue, levelIndex) => {
                      return (
                        <div>
                          <h1> {levelValue.title} </h1>
                          <ul>
                            {levelValue.course.map((item, key) => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
