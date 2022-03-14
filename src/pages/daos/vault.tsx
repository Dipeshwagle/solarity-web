import React from "react";
import Layout from "components/Layout";
import Vault from "modules/DAOS/Vault";

import Hero from "components/Hero";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout heroContent={<Hero {...HERO_DATA} />}>
      <Vault />
    </Layout>
  );
};

export default Index;
