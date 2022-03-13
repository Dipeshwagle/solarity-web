import React from "react";
import Base from "modules/DAOS/Base";
import Posts from "modules/Home/Posts";

import { POSTS } from "data/mock";

const Home = () => {
  return (
    <Base>
        <Posts posts={POSTS} />
    </Base>
  );
};

export default Home;
