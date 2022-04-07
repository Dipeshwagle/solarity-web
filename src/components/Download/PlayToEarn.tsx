import React from "react";
import PlayToEarnImage from "assets/images/placeholder/download/playToEarn.png";
import Image from "next/image";

const PlayToEarn = () => {
  return (
    <div className="h-[378px] relative">
      <div className="-z-10">
        <Image
          src={PlayToEarnImage}
          alt="Play to earn"
          layout="fill"
          className="roundex-2xl"
        />
      </div>
      <div className="px-20 py-9 max-w-[600px] justify-between flex flex-col h-full">
        <div className="flex flex-col gap-5">
          <span className="text-[19px] font-bold">Play-to-Earn</span>
          <span className="text-xs text-gray-950">
            Free-to-play is so 2010… With The Sandbox, you will be able to
            monetize the games you create! Play-to-Earn is unlocked through our
            rewarding model for players and creators, who will have strong
            incentives to play and create with rewards that have real-world
            value.
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-[19px] font-bold">
            How to earn in The Sandbox?
          </span>
          <span className="text-xs text-gray-950">
            <ul className="flex flex-col gap-4 ml-5 list-disc">
              <li>Play GAMES, earn rewards</li>
              <li>Build GAMES, monetize thems</li>
              <li>Create ASSETS, market them</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayToEarn;
