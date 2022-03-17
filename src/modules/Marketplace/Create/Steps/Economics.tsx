import React from "react";
import Image from "next/image";
import DAOOrganizationEconomic from "assets/images/dao-organization-economic.png";

const Economics = () => {
  return (
    <div className="flex flex-col -mt-4">
      <span className="text-lg font-bold">Economics Setup</span>
      <span className="text-xs text-gray-950">
        In a goldberg Polyhedron there are 12 pentagons, those will be the
        community leaders, so choose carefully! They can be single members, or
        other DAOs
      </span>
      <div className="flex gap-5 mt-4">
        <div className="flex flex-col min-w-md">
          <span className="ml-8 text-lg font-bold ">DAO Organization</span>
          <Image
            src={DAOOrganizationEconomic}
            alt="dao universe"
            placeholder="blur"
            width={200}
            height={250}
            className="mt-16 "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-lg font-bold">Subscription Tiers</span>
            <span className="max-w-sm text-xs text-gray-950 ">
              Here you can decide different levels of membership for your
              DAOverse and what they unlock.
            </span>
            <div className="flex flex-col w-full gap-3">
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">( Tinder Free Layer 0 )</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="number"
                    placeholder="$750"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="$750"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
                <span className="flex items-center gap-4 text-sm font-semibold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59673 9.45866H4.81773C5.30392 7.1603 7.1161 5.30392 9.41446 4.86193V4.64093C7.1161 4.15474 5.30392 2.29837 4.81773 0H4.59673C4.11054 2.29837 2.29837 4.15474 0 4.59673V4.86193C2.29837 5.30392 4.11054 7.1603 4.59673 9.45866Z"
                      fill="white"
                    />
                  </svg>
                  Cost
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="flex items-center">
                  <span className="text-sm">( Tinder Gold Layer 1 )</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="number"
                    placeholder="$1450"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="$1450"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">(Tinder Platinum Layer 2)</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="number"
                    placeholder="$2500"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="$2500"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <span className="font-bold text-[19px]">Reputational system</span>
            <span className="max-w-sm text-xs text-gray-950 ">
              Here you can decide with what criteria members of your DAO will be
              rewarded
            </span>
            <div className="flex flex-col w-full gap-3">
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">( Normie Layer 0 )</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="number"
                    placeholder="$750"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="$750"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
                <span className="flex items-center gap-4 text-sm font-semibold">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59673 9.45866H4.81773C5.30392 7.1603 7.1161 5.30392 9.41446 4.86193V4.64093C7.1161 4.15474 5.30392 2.29837 4.81773 0H4.59673C4.11054 2.29837 2.29837 4.15474 0 4.59673V4.86193C2.29837 5.30392 4.11054 7.1603 4.59673 9.45866Z"
                      fill="white"
                    />
                  </svg>
                  Reward
                </span>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">( BMO Layer 1 )</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="number"
                    placeholder="$1450"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="$1450"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8">
                <div className="flex items-center">
                  <span className="text-sm">( Chad Layer 2 ))</span>
                </div>
                <div className="flex col-span-2 gap-4">
                  <input
                    type="number"
                    placeholder="$2500"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />{" "}
                  <input
                    type="number"
                    placeholder="$2500"
                    className="w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economics;
