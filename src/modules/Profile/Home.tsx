import React from "react";
import { POSTS, TAGS } from "data/mock";

import Posts from "modules/Home/Posts";
const Home = () => {
  return (
    <div>
      <Posts posts={POSTS} />
    </div>
  );
};

export default Home;
