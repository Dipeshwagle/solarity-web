import React from "react";
import Base from "modules/DAOS/Base";
import Home from "modules/Home";
import Posts from "modules/Home/Posts";

import { POSTS } from "data/mock";

const MarketPlace = () => {
  return (
    <Base>
        <Posts posts={POSTS} />
    </Base>
  );
};

export default MarketPlace;
