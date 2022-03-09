import React from "react";
import Layout from "components/Layout";
import Home from "modules/Home";
import Hero from "modules/Marketplace/Hero";

import RightSidebar from "modules/Home/RightSidebar";

const Index = () => {
  return (
    <Layout rightSidebar={<RightSidebar />} heroContent={<Hero imageUrl="/images/placeholder/post/post_one.png"/>}>
    </Layout>
  );
};

export default Index;
