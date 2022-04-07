import React from "react";
import Layout from "components/Layout";
import Download from "components/Hero/Download";

import RightSidebar from "modules/Marketplace/RightSidebar";

import { HERO_DATA } from "data/marketplace";

const Index = () => {
  return (
    <Layout
      rightSidebar={<div/>}
      heroContent={<Download  />}
    >
      {/* <MarketPlace /> */}
    </Layout>
  );
};

export default Index;
