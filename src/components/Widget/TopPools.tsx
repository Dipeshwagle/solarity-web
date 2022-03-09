import React from "react";
import Image from "next/image";
import Base from "components/Widget/Base";

const TopPools = () => {
  return (
    <Base title="Top Sales 1(D)" headerRight="View More">
      <div className="divide-y divide-borderwidget">
        <div className="grid items-center grid-cols-5 gap-6 px-5 py-4">
          <div className="font-bold text-[15px] font-white col-span-2">DUSK - USDT</div>
          <div className="col-span-2">
            <div className="text-xs text-gray-950">Volume</div>
            <div className="flex items-center gap-12 mt-1">
              <span className="mt-2 text-xs font-semibold text-white">
                340,170.90 USD
              </span>
            </div>
          </div>
          <span className="mt-2 text-xs text-[#3BA946]">23%</span>
        </div>
        <div className="grid items-center grid-cols-5 gap-6 px-5 py-4">
          <div className="font-bold text-[15px] font-white col-span-2">SMB - MonkeDAO</div>
          <div className="col-span-2">
            <div className="text-xs text-gray-950">Volume</div>
            <div className="flex items-center gap-12 mt-1">
              <span className="mt-2 text-xs font-semibold text-white">
                340,170.90 USD
              </span>
            </div>
          </div>
          <span className="mt-2 text-xs text-[#E0464D]">8.5%</span>
        </div>
        <div className="grid items-center grid-cols-5 gap-6 px-5 py-4">
          <div className="font-bold text-[15px] font-white col-span-2">DUST - SOL</div>
          <div className="col-span-2">
            <div className="text-xs text-gray-950">Volume</div>
            <div className="flex items-center gap-12 mt-1">
              <span className="mt-2 text-xs font-semibold text-white">
                340,170.90 USD
              </span>
            </div>
          </div>
          <span className="mt-2 text-xs text-[#3BA946]">1.05%</span>
        </div>
        <div className="grid items-center grid-cols-5 gap-6 px-5 py-4">
          <div className="font-bold text-[15px] font-white col-span-2">SMB - ETH</div>
          <div className="col-span-2">
            <div className="text-xs text-gray-950">Volume</div>
            <div className="flex items-center gap-12 mt-1">
              <span className="mt-2 text-xs font-semibold text-white">
                340,170.90 USD
              </span>
            </div>
          </div>
          <span className="mt-2 text-xs text-[#3BA946]">1.05%</span>
        </div>
        <div className="grid items-center grid-cols-5 gap-6 px-5 py-4">
          <div className="font-bold text-[15px] font-white col-span-2">BTC - ETH</div>
          <div className="col-span-2">
            <div className="text-xs text-gray-950">Volume</div>
            <div className="flex items-center gap-12 mt-1">
              <span className="mt-2 text-xs font-semibold text-white">
                340,170.90 USD
              </span>
            </div>
          </div>
          <span className="mt-2 text-xs text-[#3BA946]">1.05%</span>
        </div>
      </div>
    </Base>
  );
};

export default TopPools;
