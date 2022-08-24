import React from "react";
import FAQ from "components/FAQ";
import Hero from "components/Hero";
import PromiseTwo from "components/LandingPageSections/PromiseTwo";
import HowItWorks from "components/LandingPageSections/HowItWorks";
import EditorSection from "components/LandingPageSections/EditorSection";
import ProductDetails from "components/LandingPageSections/ProductDetails";

const Index = () => {
  return (
    <main>
      <Hero />
      <PromiseTwo />
      <HowItWorks />
      <EditorSection id="editor" />
      <ProductDetails />
      <FAQ />
    </main>
  );
};

export default Index;
