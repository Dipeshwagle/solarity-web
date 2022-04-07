import React from "react";
import Image from "next/image";
import SystemRequirementImage from "assets/images/placeholder/download/systemRequirement.png";

const SystemRequirement = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-12">
      <div>
        <Image
          src={SystemRequirementImage}
          alt="syestem requirement"
          width={280}
          height={257}
        />
      </div>
      <div className="flex flex-col col-span-2">
        <span className=" text-[19px] font-bold">System requirements</span>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-4 pt-4">
              <span className="text-sm ">MINIMUM:</span>
              <span className="text-xs text-gray-950">
                Requires a 64-bit processor and operating system
                <br />
                OS: Windows 7
                <br />
                Processor: Dual Core 2GHz
                <br />
                Memory: 4 GB RAM
                <br />
                Graphics: 512 MB VRAM
                <br />
                DirectX: Version 11
                <br />
                Storage: 2 GB available space
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className=" text-[19px] font-bold"></span>
            <div className="flex flex-col gap-4 pt-4">
              <span className="text-sm ">MINIMUM:</span>
              <span className="text-xs text-gray-950">
                Requires a 64-bit processor and operating system
                <br />
                OS: Windows 10
                <br />
                Processor: Quad Core 3GHz
                <br />
                Memory: 8 GB RAM
                <br />
                Graphics: 2 GB VRAM
                <br />
                DirectX: Version 11
                <br />
                Storage: 2 GB available space
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemRequirement;
