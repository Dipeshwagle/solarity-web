import React from "react";
import Link from "next/link";
import { Home, Sparkle, Auction, PlusCircle, Hot } from "components/Icons";
import DisclosureButton from "components/DisclosureButton";
import ProfileButton from "components/ProfileButton";

const SideBar = () => {
  const MY_DAOS = [
    {
      title: "Club Noriega",
      imageUrl: "/images/placeholder/your-dao/Club Noriega.png",
      link: "/dao/club-noriega",
    },
    {
      title: "Taraval Lounge",
      imageUrl: "/images/placeholder/your-dao/Taraval Lounge.png",
      link: "/dao/taraval-lounge",
    },
    {
      title: "Taraval Lounge",
      imageUrl: "/images/placeholder/your-dao/Pacheco Crew.png",
      link: "/dao/pacheco-crew",
    },
    {
      title: "Club Noriega",
      imageUrl: "/images/placeholder/your-dao/Club Noriegaa.png",
      link: "/dao/club-noriega",
    },
  ];
  return (
    <div className="sticky top-0 flex flex-col items-start justify-start max-h-[90vh] gap-6 pb-10 overflow-y-scroll">
      <div>
        <Link href="/dao/popular" passHref>
          <a className="gap-2 pl-4 text-lg font-bold pr-14 btn rounded-3xl">
            <Home />
            Home
          </a>
        </Link>
      </div>
      <Link href="/dao/popular" passHref>
        <a className="flex items-center gap-2 mx-4 text-lg font-bold">
          <Hot />
          Popular Today
        </a>
      </Link>

      <DisclosureButton items={MY_DAOS} />
      <Link href="/dao/new" passHref>
        <a className="flex items-center gap-2 mx-4 text-lg font-bold">
          <Sparkle />
          What’s New
        </a>
      </Link>
      <Link href="/dao/popular" passHref>
        <a className="flex items-center gap-2 mx-4 text-lg font-bold">
          <Auction />
          Auction
        </a>
      </Link>

      <div>
        <Link href="/dao/create" passHref>
          <a className="w-full gap-2 pl-4 text-lg font-bold pr-14 btn btn-secondary rounded-3xl">
            <PlusCircle />
            Create
          </a>
        </Link>
      </div>
      <div className="pb-10 mt-24">
        <ProfileButton />
      </div>
    </div>
  );
};

export default SideBar;
