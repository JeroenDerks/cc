import React from "react";
import Hero from "components/Hero";
import PromiseOne from "components/LandingPageSections/PromiseOne";
import PromiseTwo from "components/LandingPageSections/PromiseTwo";
import HowItWorks from "components/LandingPageSections/HowItWorks";
import EditorSection from "components/LandingPageSections/EditorSection";
import ProductDetails from "components/LandingPageSections/ProductDetails";
import { setCDN } from "shiki";
setCDN("https://unpkg.com/shiki/");

const Index = () => {
  return (
    <>
      <Hero />
      <PromiseOne />
      <PromiseTwo />
      <HowItWorks />
      <EditorSection />
      <ProductDetails />
    </>
  );
};

export default Index;
