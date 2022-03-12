import React from "react";
import Layout from "components/Layout";
import Home from "modules/DAOS/Home";

import Hero from "components/Hero";

import RightSidebar from "modules/DAOS/Sidebar/Home";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero {...HERO_DATA} />}
    >
      <Home/>
    </Layout>
  );
};

export default Index;
