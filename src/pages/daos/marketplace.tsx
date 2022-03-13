import React from "react";
import Layout from "components/Layout";
import MarketPlace from "modules/DAOS/Marketplace";
import Hero from "components/Hero";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout heroContent={<Hero {...HERO_DATA} />} rightSidebar={<div/>}>
      <MarketPlace />
    </Layout>
  );
};

export default Index;
