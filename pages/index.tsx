import React from "react";
import Link from "next/link";
import BaseLayout from "components/BaseLayout";
import Hero from "components/Hero";
import BorderBox from "components/BorderBox";

const Index = () => {
  return (
    <BaseLayout>
      <Hero />
      <BorderBox>
        <Link href="/product/canvas">
          <a>Canvas</a>
        </Link>
      </BorderBox>
    </BaseLayout>
  );
};

export default Index;
