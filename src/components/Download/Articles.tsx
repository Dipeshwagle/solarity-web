import React from "react";
import Image from "next/image";

import ArticleOne from "assets/images/placeholder/download/articles/one.png";
import ArticleTwo from "assets/images/placeholder/download/articles/two.png";
import ArticleThree from "assets/images/placeholder/download/articles/three.png";
import ArticleFour from "assets/images/placeholder/download/articles/four.png";

const Articles = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-4">
      <div className="relative w-full px-6 py-3 h-[130px]">
        <Image
          src={ArticleOne}
          alt="article one"
          layout="fill"
          className="rounded-2xl"
        />
        <div className="absolute flex flex-col bottom-5">
          <span className="text-sm font-bold">The Sandbox</span>
          <span className="text-xs text-gray-950">From 2D to 3D</span>
        </div>
      </div>
      <div className="relative w-full px-6 py-3 h-[130px]">
        <Image
          src={ArticleTwo}
          alt="article one"
          layout="fill"
          className="rounded-2xl"
        />
        <div className="absolute flex flex-col bottom-5">
          <span className="text-sm font-bold">ERC-1155</span>
          <span className="text-xs text-gray-950">A new standard</span>
        </div>
      </div>
      <div className="relative w-full px-6 py-3 h-[130px]">
        <Image
          src={ArticleThree}
          alt="article one"
          layout="fill"
          className="rounded-2xl"
        />
        <div className="absolute flex flex-col bottom-5">
          <span className="text-sm font-bold">Minecraft</span>
          <span className="text-xs text-gray-950">Import your work</span>
        </div>
      </div>
      <div className="relative w-full px-6 py-3 h-[130px]">
        <Image
          src={ArticleFour}
          alt="article one"
          layout="fill"
          className="rounded-2xl"
        />
        <div className="absolute flex flex-col bottom-5">
          <span className="text-sm font-bold">NFTs</span>
          <span className="text-xs text-gray-950">User-generated content</span>
        </div>
      </div>
    </div>
  );
};

export default Articles;
