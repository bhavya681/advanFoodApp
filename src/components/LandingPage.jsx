import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import MyCarousel from "./Carousel";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <MyCarousel />
      <FeatureSection />
    </>
  );
};

export default LandingPage;
