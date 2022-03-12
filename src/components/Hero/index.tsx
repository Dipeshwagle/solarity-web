import React, { FC } from "react";
import Image from "next/image";
import { VR } from "components/Icons";

export interface HeroProps {
  imageUrl: string;
  content?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const Hero: FC<HeroProps> = ({ imageUrl, content }) => {
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

      {content && (
        <div className="flex justify-between my-6">
          <div className="flex flex-col max-w-4xl ">
            <span className="text-[15px] text-secondary">{content.title}</span>
            <span className="mt-3 text-sm text-gray-950">
              {content.description}
            </span>
          </div>
          <div>
            <button className="btn btn-secondary rounded-3xl">
              {content.buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
