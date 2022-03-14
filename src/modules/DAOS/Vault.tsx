import React from "react";
import Base from "modules/DAOS/Base";
import TokenBalance from "components/TokenBalances";

import { TOKEN_BALANCES } from "data/daos";

const Home = () => {
  return (
    <Base>
      <TokenBalance {...TOKEN_BALANCES} />
    </Base>
  );
};

export default Home;
