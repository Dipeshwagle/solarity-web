import React from "react";
import Logo from "components/Logo";
import MenuList from "./MenuList";
import WalletButton from "components/WalletButton";

import { EthereumIcon, CaretDown } from "components/Icons";

const MenutItems = [
  {
    title: "Explore",
    link: "/",
  },
  {
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    title: "Experience",
    link: "/experience",
  },
  {
    title: "DAOs",
    link: "/daos",
  },
  {
    title: "Launchpad",
    link: "/explore",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-4">
      <div className="py-3">
        <Logo />
      </div>
      <div className="flex items-center">
        <MenuList items={MenutItems} />
        <div className="flex items-center space-x-3 ml-28">
          <button className="gap-3 text-lg font-bold btn rounded-3xl">
            <EthereumIcon />
            ETH
            <CaretDown />
          </button>
          <WalletButton/>
        </div>
      </div>
    </header>
  );
};

export default Header;
