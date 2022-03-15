import React, { FC } from "react";
import Image from "next/image";

export interface HeroProps {
  imageUrl: string;
  smallImage: string;
}

const Hero: FC<HeroProps> = ({ imageUrl, smallImage }) => {
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
      </div>
      <div className="flex justify-center ">
        <div className="h-[201px] w-[201px] rounded-full relative -mt-28">
          <Image
            src={smallImage}
            alt={"VR Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
