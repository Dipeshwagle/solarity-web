import React from "react";
import Layout from "components/Layout";
import MarketPlace from "modules/Marketplace";
import Hero from "modules/Marketplace/Hero";

import RightSidebar from "modules/Marketplace/RightSidebar";

const Index = () => {
  return (
    <Layout rightSidebar={<RightSidebar />} heroContent={<Hero imageUrl="/images/placeholder/post/post_one.png"/>}>
      <MarketPlace/>
    </Layout>
  );
};

export default Index;
