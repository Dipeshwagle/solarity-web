import React, { FC } from "react";
import Link from "components/Link";
interface IProps {
  items: {
    title: string;
    link: string;
  }[];
}

const MenuList: FC<IProps> = ({ items }) => {
  return (
    <div className="space-x-10">
      {items.map(({ title, link }) => (
        <Link
          href={link}
          key={link}
          className="text-lg hover:py-8 hover:border-secondary"
          activeClassName="font-bold border-b-2 py-8 border-secondary"
          defaultClassName=""
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
