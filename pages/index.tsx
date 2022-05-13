import React from "react";
import Link from "next/link";
import BaseLayout from "components/BaseLayout";

const Index = () => {
  return (
    <BaseLayout>
      <Link href="/raw">
        <a>Raw</a>
      </Link>
    </BaseLayout>
  );
};

export default Index;
