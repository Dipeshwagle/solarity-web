import React from "react";
import Image from "next/image";
import { VR } from "components/Icons";

const index = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <div className="relative w-full h-[314px] rounded-2xl -mt-5">
        <Image
          src={imageUrl}
          alt={"VR Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />

        <button className="absolute gap-3 text-lg font-bold btn rounded-3xl bottom-2 right-2 bg-transparentwhite w-[100px]">
          <VR />
          VR
        </button>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex flex-col ">
          <span className="text-[15px] text-secondary">
            Land # 1414, Solarity
          </span>
          <span className="mt-3 text-sm text-gray-950">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, eget
            quisque pharetra, nisl. Nisl a proin a commodo libero purus duis.
            Leo, condimentum viverra mattis feugiat egestas est at nec. Praesent
            vitae fames feugiat diam mauris. Fringilla posuere quam enim id
            urna. Arcu, ut magna cursus pharetra semper a.
          </span>
        </div>
        <div className=" w-[100px]">
          <button className="btn btn-secondary rounded-3xl">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default index;
