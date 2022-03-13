import React from "react";
import Layout from "components/Layout";
import MarketPlace from "modules/DAOS/MarketPlace";
import Hero from "components/Hero";

import RightSidebar from "modules/DAOS/Sidebar/MarketPlace";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout
      heroContent={<Hero {...HERO_DATA} />}
      rightSidebar={<RightSidebar />}
    >
      <MarketPlace />
    </Layout>
  );
};

export default Index;
