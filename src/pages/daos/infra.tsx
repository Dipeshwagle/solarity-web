import React from "react";
import Layout from "components/Layout";
import Infra from "modules/DAOS/Infra";

import Hero from "components/Hero";

import RightSidebar from "modules/DAOS/Sidebar/Infra";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero {...HERO_DATA} />}
    >
      <Infra/>
    </Layout>
  );
};

export default Index;
