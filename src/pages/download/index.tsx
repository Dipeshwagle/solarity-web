import React from "react";
import Layout from "components/Layout";
import Download from "components/Hero/Download";
import DownloadIndex from "modules/Download";

const Index = () => {
  return (
    <Layout
      heroContent={<Download  />}
    >
      <DownloadIndex/>
    </Layout>
  );
};

export default Index;
