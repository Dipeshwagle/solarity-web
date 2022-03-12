import React from "react";
import Layout from "components/Layout";
import DAOBase from "modules/DAOS/Base";

import Hero from "components/Hero";

import RightSidebar from "modules/Marketplace/RightSidebar";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout
      rightSidebar={<RightSidebar />}
      heroContent={<Hero {...HERO_DATA} />}
    >
      <DAOBase>Infra</DAOBase>
    </Layout>
  );
};

export default Index;
