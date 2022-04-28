import React from "react";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import HomePage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import CourseList from "./CoursesList/CourseList.jsx";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import Aboutus from "./Aboutus/Aboutus";
import OnlineCourses from "./OnlineCourses/OnlineCourses";
import Review from "./Review/Review";

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Aboutus />
      <OnlineCourses />
      <BenefitsSection />
      <CourseList />
      <FeaturesSection />
      <Review />
    </>
  );
}
