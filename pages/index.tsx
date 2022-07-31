import React from "react";
import FAQ from "components/FAQ";
import Hero from "components/LandingPageSections/Hero";
// import PromiseOne from "components/LandingPageSections/PromiseOne";
import PromiseTwo from "components/LandingPageSections/PromiseTwo";
import HowItWorks from "components/LandingPageSections/HowItWorks";
import EditorSection from "components/LandingPageSections/EditorSection";
import ProductDetails from "components/LandingPageSections/ProductDetails";

const Index = () => {
  return (
    <>
      <Hero />
      {/* <PromiseOne /> */}
      <PromiseTwo />
      <HowItWorks />
      <EditorSection id="editor" />
      <ProductDetails />
      <FAQ />
    </>
  );
};

export default Index;
