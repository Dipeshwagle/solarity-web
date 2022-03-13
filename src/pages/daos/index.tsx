import React from "react";
import Layout from "components/Layout";
import Home from "modules/DAOS/Home";

import Hero from "components/Hero";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout rightSidebar={<div />} heroContent={<Hero {...HERO_DATA} />}>
      <Home />
    </Layout>
  );
};

export default Index;
