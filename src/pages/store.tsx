import React from "react";
import Layout from "components/Layout";
import Hero from "modules/Store/Hero";
import Store from "modules/Store/index";

const Index = () => {
  return (
    <Layout heroContent={<Hero />}>
      <Store />
    </Layout>
  );
};

export default Index;
