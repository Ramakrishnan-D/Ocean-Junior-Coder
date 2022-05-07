import React from "react";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import HomePage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import CourseList from "./CoursesList/CourseList.jsx";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import Aboutus from "./Aboutus/Aboutus";
import OnlineCourses from "./OnlineCourses/OnlineCourses";
import Review from "./Review/Review";
import Stratergy from "./Stratergy/Stratergy";
import SpecialFeatures from "./SpecialFeatures/SpecialFeatures";
import FaqSection from "./FaqSection/FaqSection";
import Team from "./MeetTeam/Team.jsx";
import MobileApp from "./MobileAppDesign/MobileApp.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import Ramakrishnan from "./Ramakrishnan";
import Anusuya from "./Anusuya/Anusuya";

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Aboutus />

      {/* <OnlineCourses /> */}
      <BenefitsSection />
      <CourseList />
      <FeaturesSection />
      <Review />
      <Stratergy />
      <SpecialFeatures />
      <FaqSection />
      <MobileApp />
      <Team />
      <Contact />
      <Footer />
      <Anusuya />
      <Ramakrishnan />
    </>
  );
}
