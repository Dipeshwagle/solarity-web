import React from "react";
import Image from "next/image";
import SearchInput from "components/SearchInput";
import { Lock } from "components/Icons";

const Room = () => {
  return (
    <div className="grid grid-cols-2 mt-10 mb-10 gap-x-14 gap-y-14">
      <div className="flex flex-col gap-2 px-6 py-6 rounded-3xl bg-brandblack">
        <span className="text-xs text-gray-950">Room Preview</span>
        <div>
          <Image
            src="/images/placeholder/spaces/rooms/three.png"
            alt="room preview"
            width="450"
            height="220"
          />
        </div>
        <ul className="flex flex-col ml-5 list-disc font-medium text-[18px] gap-4">
          <li>Your own spot inside the MoneyVERSE</li>
          <li>Automatic Airdrop of the Solarity Pass</li>
          <li>Airdrop of the Solarity Coin</li>
          <li>Whitelist for other shit</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 px-6 py-1 rounded-3xl">
        <span className="text-[19px] font-bold">Choose Room Section</span>
        <SearchInput />
        <div className="grid items-center grid-cols-3 gap-3">
          <div className="h-[85px] w-[115px] relative ">
            <Image
              src="/images/placeholder/spaces/thumbnail.png"
              alt="thubnail"
              layout="fill"
            />
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-1 -right-3 "
            >
              <circle cx="14" cy="14" r="14" fill="#6163FF" />
              <path
                d="M10 13.83L12.83 16.66L18.5 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="h-[100px] w-[115px] relative ">
            <Image
              src="/images/placeholder/spaces/thubnail-blur.png"
              alt="thubnail"
              layout="fill"
            />
            <Lock className="absolute left-1/3 top-1/3 " />
          </div>
          <div className="h-[100px] w-[115px] relative ">
            <Image
              src="/images/placeholder/spaces/thubnail-blur.png"
              alt="thubnail"
              layout="fill"
            />
            <Lock className="absolute left-1/3 top-1/3 " />
          </div>
          <div className="h-[100px] w-[115px] relative ">
            <Image
              src="/images/placeholder/spaces/thubnail-blur.png"
              alt="thubnail"
              layout="fill"
            />
            <Lock className="absolute left-1/3 top-1/3 " />
          </div>
          <div className="h-[100px] w-[115px] relative ">
            <Image
              src="/images/placeholder/spaces/thubnail-blur.png"
              alt="thubnail"
              layout="fill"
            />
            <Lock className="absolute left-1/3 top-1/3 " />
          </div>
          <div className="h-[100px] w-[115px] relative ">
            <Image
              src="/images/placeholder/spaces/thubnail-blur.png"
              alt="thubnail"
              layout="fill"
            />
            <Lock className="absolute left-1/3 top-1/3 " />
          </div>
          <button className="mt-4 rounded-full btn btn-secondary">Buy Room</button>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-6 rounded-3xl bg-brandblack">
        <span className="text-[19px] font-bold">Money Verse</span>
        <div>
          <Image
            src="/images/placeholder/spaces/rooms/one.png"
            alt="room preview"
            width="450"
            height="220"
          />
        </div>
        <ul className="flex flex-col ml-5 list-disc font-medium text-[18px] gap-4">
          <li>Your own spot inside the MoneyVERSE</li>
          <li>Automatic Airdrop of the Solarity Pass</li>
          <li>Airdrop of the Solarity Coin</li>
          <li>Whitelist for other shit</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 px-6 py-6 rounded-3xl bg-brandblack">
        <span className="text-[19px] font-bold">Solarity NFT Union</span>
        <div>
          <Image
            src="/images/placeholder/spaces/rooms/two.png"
            alt="room preview"
            width="450"
            height="220"
          />
        </div>
        <ul className="flex flex-col ml-5 list-disc font-medium text-[18px] gap-4">
          <li>Your own spot inside the MoneyVERSE</li>
          <li>Automatic Airdrop of the Solarity Pass</li>
          <li>Airdrop of the Solarity Coin</li>
          <li>Whitelist for other shit</li>
        </ul>
      </div>
    </div>
  );
};

export default Room;
