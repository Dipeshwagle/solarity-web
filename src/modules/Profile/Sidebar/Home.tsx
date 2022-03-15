import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-brandblack">
      <span className="text-[19px] font-bold">Roles:</span>
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <Image
            src="/images/placeholder/profile/roles/one.png"
            alt="Role"
            height={45}
            width={45}
          />
          <span className="text-base font-bold">
            Space rider for <span className="text-secondary"> Soltades</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/placeholder/profile/roles/two.png"
            alt="Role"
            height={45}
            width={45}
          />
          <span className="text-base font-bold">
            Space rider for <span className="text-secondary"> Soltades</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/placeholder/profile/roles/three.png"
            alt="Role"
            height={45}
            width={45}
          />
          <span className="text-base font-bold">
            Space rider for <span className="text-secondary"> Soltades</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-[19px] font-bold">Roles:</span>{" "}
        <span>113 Sol Sector</span>
      </div>

      <div className="flex flex-col justify-between gap-2">
        <span className="text-[19px] font-bold">Common DAOs</span>
        <div className="flex justify-between gap-3">
          <Image
            src="/images/placeholder/profile/roles/one.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/profile/roles/two.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/profile/roles/three.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/profile/roles/four.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/profile/roles/five.png"
            alt="Role"
            height={45}
            width={45}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
