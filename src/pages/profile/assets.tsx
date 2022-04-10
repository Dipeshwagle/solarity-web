import React from "react";
import Layout from "components/Layout";
import Hero from "modules/Profile/Hero";
import Assets from "modules/Profile/Assets";

const ProfileAssets = () => {
  return (
    <Layout heroContent={<Hero />}>
      <Assets />
    </Layout>
  );
};

export default ProfileAssets;
