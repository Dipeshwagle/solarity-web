import React, { FC } from "react";
import { Tick } from "components/Icons";

interface IProps {
  icon: React.ReactNode;
  title: string;
  list: string[];
}

const Card: FC<IProps> = ({ icon, title, list }) => {
  return (
    <div className="flex flex-col gap-4 p-10 pr-16 transition-all ease-in border cursor-pointer border-brandblack rounded-3xl hover:bg-brandblack">
      <div>{icon} </div>
      <span className="font-bold text-[21px]">{title}</span>
      <div className="flex flex-col gap-4"> 
        {list.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-[15px] text-gray-950">
            <Tick /> <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
