import React, { FC } from "react";
import Image from "next/image";
import { VR } from "components/Icons";

export interface HeroProps {
  imageUrl: string;
  smallImage: string;
  vr?: boolean;
}

const Hero: FC<HeroProps> = ({ imageUrl, smallImage, vr }) => {
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
        {vr && (
          <button className="absolute gap-3 text-lg font-bold btn rounded-3xl bottom-2 right-2 bg-transparentwhite w-[100px]">
            <VR />
            VR
          </button>
        )}
      </div>
      <div className="flex justify-center ">
        <div className="h-[201px] w-[201px] rounded-full relative -mt-28">
          <Image
            src={smallImage}
            alt={"VR Image"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
