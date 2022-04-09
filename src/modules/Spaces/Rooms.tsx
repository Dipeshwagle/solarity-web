import React from "react";
import Link from "components/Link";
import Room from "components/Spaces/Room";

export const MENU_LINKS = [
  {
    title: "Rooms",
    link: "/spaces",
    exact: true,
  },
  {
    title: "Galleries",
    link: "/spaces/galleries ",
    exact: true,
  },
  {
    title: "Community",
    link: "/spaces/community",
    exact: true,
  },
  {
    title: "Solarity",
    link: "/spaces/solarity",
    exact: true,
  },
];

const Rooms = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <span className=" text-[19px] font-bold">Choose a Space</span>
        <span className=" text-[15px] text-gray-950 max-w-2xl leading-6">
          Select the space you’ll use to show your NFTs. Some are designed by
          Select architects and minted in limited editions as NFTs.{" "}
        </span>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        {MENU_LINKS.map(({ link, exact, title }, index) => (
          <Link
            href={link}
            key={link}
            exact={exact}
            className="text-lg "
            activeClassName="font-bold border-b-2 pb-3  border-secondary"
            defaultClassName=" text-gray-950"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="border-b border-brandblack" />
      <Room/>
    </div>
  );
};

export default Rooms;
