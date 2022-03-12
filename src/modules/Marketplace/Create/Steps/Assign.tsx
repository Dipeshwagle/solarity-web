import React, { useState } from "react";
import Image from "next/image";
import classnames from "classnames";

import DAOUniverseImage from "assets/images/dao-universe.png";
import DAOUniverseBlue from "assets/images/dao-universe-blue.png";

import { CheckedRadio, UncheckedRaido } from "components/Icons";

const Assign = () => {
  const [selectedPentagons, setSelectedPentagons] = useState<
    "for-profit" | "non-profit" | null
  >(null);

  return (
    <div className="flex flex-col -mt-4">
      <span className="font-bold text-[19px]">Assign Pentagons</span>
      <span className="text-xs text-gray-950">
        In a goldberg Polyhedron there are 12 pentagons, those will be the
        community leaders, so choose carefully! They can be single members, or
        other DAOs
      </span>

      <div className="flex mt-4 gap-[40px]">
        <div
          className={classnames(
            selectedPentagons == "for-profit" ? "bg-brandblack" : "",
            "flex flex-col items-center gap-10 p-10 transition-all ease-in border cursor-pointer select-none border-brandblack rounded-3xl hover:bg-brandblack"
          )}
          onClick={() => {
            setSelectedPentagons("for-profit");
          }}
        >
          <div className="flex items-center justify-center gap-4">
            {selectedPentagons === "for-profit" ? (
              <CheckedRadio />
            ) : (
              <UncheckedRaido />
            )}

            <span className="font-bold text-[19px]">
              DAO (Organization for profit)
            </span>
          </div>
          <Image src={DAOUniverseImage} alt="dao universe" placeholder="blur" />
          <span className="font-bold text-[19px]">DAO of DAOs/DAVs</span>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-7">
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.54218 13.6652L19.5 0.618033L37.4578 13.6652L30.5985 34.7758H8.40146L1.54218 13.6652Z"
                  fill="#886A8B"
                  stroke="white"
                />
              </svg>

              <span className="text-xl font-bold">= DAO Departments</span>
            </div>
            <div className="flex items-center gap-7">
              <svg
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.2675 5.24091L17.5 0.574731L25.7325 5.24091L33.8898 10.0374L33.965 19.5L33.8898 28.9626L25.7325 33.7591L17.5 38.4253L9.2675 33.7591L1.11024 28.9626L1.03502 19.5L1.11024 10.0374L9.2675 5.24091Z"
                  fill="#886A8B"
                  stroke="white"
                />
              </svg>

              <span className="text-xl font-bold">= Share Holders</span>
            </div>
          </div>
          <span className="text-xs">( Require at wast 12 Davs)</span>
        </div>
        <div
          className={classnames(
            selectedPentagons == "non-profit" ? "bg-brandblack" : "",
            " flex flex-col items-center gap-10 p-10 transition-all ease-in border cursor-pointer select-none border-brandblack rounded-3xl hover:bg-brandblack"
          )}
          onClick={() => {
            setSelectedPentagons("non-profit");
          }}
        >
          <div className="flex items-center justify-center gap-4">
            {selectedPentagons === "non-profit" ? (
              <CheckedRadio />
            ) : (
              <UncheckedRaido />
            )}
            <span className="font-bold text-[19px]">
              DAU (Union non profit)
            </span>
          </div>
          <Image src={DAOUniverseBlue} alt="dao universe" placeholder="blur" />
          <span className="font-bold text-[19px]">DAO of DAOs/DAVs</span>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-7">
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 0L38.0456 13.4742L30.9618 35.2758H8.03819L0.954397 13.4742L19.5 0Z"
                  fill="#464CA2"
                />
                <path
                  d="M1.54218 13.6652L19.5 0.618033L37.4578 13.6652L30.5985 34.7758H8.40146L1.54218 13.6652Z"
                  stroke="white"
                  stroke-Opacity="0.41"
                />
              </svg>

              <span className="text-xl font-bold">= DAO Departments</span>
            </div>
            <div className="flex items-center gap-7">
              <svg
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 0L25.9825 4.80788L34.3875 9.75L34.465 19.5L34.3875 29.25L25.9825 34.1921L17.5 39L9.0175 34.1921L0.612505 29.25L0.535 19.5L0.612505 9.75L9.0175 4.80788L17.5 0Z"
                  fill="#464CA2"
                />
                <path
                  d="M9.2675 5.24091L17.5 0.574731L25.7325 5.24091L33.8898 10.0374L33.965 19.5L33.8898 28.9626L25.7325 33.7591L17.5 38.4253L9.2675 33.7591L1.11024 28.9626L1.03502 19.5L1.11024 10.0374L9.2675 5.24091Z"
                  stroke="white"
                  stroke-Opacity="0.41"
                />
              </svg>

              <span className="text-xl font-bold">= Share Holders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assign;
