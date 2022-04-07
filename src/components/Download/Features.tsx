import React from "react";
import Image from "next/image"

import FeatureTwo from "assets/images/placeholder/download/features/two.png";
import FeatureOne from "assets/images/placeholder/download/features/one.png";
import FeatureThree from "assets/images/placeholder/download/features/three.png";

const Index = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex flex-col items-center gap-5 bg-brandblack rounded-3xl p-9">
        <span className=" text-[19px] font-bold text-center">
          Create for free
        </span>
        <span className="text-xs text-center text-gray-950">
          Create awesome 3D games for free using thousands of voxel models
          (NFTs) made by the community with VoxEdit.
        </span>
        <div>
            <Image src={FeatureOne} alt="feature one" width={125} height={110}/>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 bg-brandblack rounded-3xl p-9">
        <span className=" text-[19px] font-bold text-center">
        Build And Share
        </span>
        <span className="text-xs text-center text-gray-950">
        It&apos;s just as fun to build your game as it is to play. Share your creations in the gallery with your friends and make something they will remember forever.
        </span>
        <div>
            <Image src={FeatureTwo} alt="feature one" width={115} height={137}/>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 bg-brandblack rounded-3xl p-9">
        <span className=" text-[19px] font-bold text-center">
        No Code Required
        </span>
        <span className="text-xs text-center text-gray-950">
        Easy to learn. It is simple and intuitive to create behaviors and edit attributes
        </span>
        <div>
            <Image src={FeatureThree} alt="feature one" width={140} height={151}/>
        </div>
      </div>
    </div>
  );
};

export default Index;
