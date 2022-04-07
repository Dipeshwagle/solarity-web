import React, { FC } from "react";
import Link from "components/Link";
import Image from "next/image";
import { DownloadOval } from "components/Icons";
import Download from "assets/images/placeholder/hero/download.png";

export const MENU_LINKS = [
  {
    title: "Game Maker",
    link: "/download",
    exact: true,
  },
  {
    title: "Art",
    link: "/download/voxedit",
    exact: true,
  },
  {
    title: "Avatar",
    link: "/download/avatar",
    exact: true,
  },
];

const HeroWorld = () => {
  return (
    <div className="flex flex-col bg-brandblack">
      <div className="h-[355px] relative flex justify-end flex-col px-5">
        <Image
          src={Download}
          alt="dao universe"
          placeholder="blur"
          className="-z-10"
          layout="fill"
        />
        <div className="flex justify-between text-white px-14 py-11 z-[1]">
          <div className="flex flex-col">
            <span className="text-[19px] font-bold gap-3 text-lg">
              CRAFT YOUR GAME. CODING NOT REQUIRED
            </span>
            <span className="text-sm">
              The toolbox you need for your imagination to come to life
            </span>
          </div>

          <div className="">
            <button className="gap-4 rounded-full btn btn-secondary">
              Download <DownloadOval />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-0 gap-14">
        {MENU_LINKS.map(({ link, exact, title }, index) => (
          <Link
            href={link}
            key={link}
            exact={exact}
            className="text-lg "
            activeClassName="font-bold border-b-2 pb-3  border-secondary"
            defaultClassName=""
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroWorld;
