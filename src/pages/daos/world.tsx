import React from "react";
import Layout from "components/Layout";
import World from "modules/DAOS/World";

import Hero from "components/Hero";


import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout
      heroContent={<Hero {...HERO_DATA} />}
    >
      <World/>
    </Layout>
  );
};

export default Index;
