import React from "react";
import Layout from "components/Layout";
import Voting from "modules/DAOS/Voting";

import Hero from "components/Hero";

import RightSidebar from "modules/DAOS/Sidebar/Voting";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero {...HERO_DATA} />}
    >
      <Voting />
    </Layout>
  );
};

export default Index;
