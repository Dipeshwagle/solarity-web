import React from "react";
import Image from "next/image";

const Assets = () => {
  return (
    <div className="flex flex-col mb-10 gap-7">
      <div className="grid grid-cols-2 gap-8 px-8 rounded-3xl bg-brandblack py-9">
        <div className="flex flex-col gap-6 ">
          <span className=" header-one">Rooms</span>
          <Image
            src="/images/placeholder/profile/assets/bg_one.png "
            alt="heroImage"
            width={508}
            height={258}
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <span className="text-xs text-gray-950">Add ons</span>
          <div className="grid grid-cols-3 gap-5 ">
            <div className="h-[115px] w-[115px] relative">
              <Image
                src="/images/placeholder/profile/assets/rooms/one.png"
                alt="heroImage"
                layout="fill"
              />
            </div>
            <div className="h-[115px] w-[115px] relative">
              <Image
                src="/images/placeholder/profile/assets/rooms/two.png"
                alt="heroImage"
                layout="fill"
              />
            </div>
            <div className="h-[115px] w-[115px] relative">
              <Image
                src="/images/placeholder/profile/assets/rooms/three.png"
                alt="heroImage"
                layout="fill"
              />
            </div>
            <div className="h-[115px] w-[115px] relative">
              <Image
                src="/images/placeholder/profile/assets/rooms/one.png"
                alt="heroImage"
                layout="fill"
              />
            </div>
            <div className="h-[115px] w-[115px] relative">
              <Image
                src="/images/placeholder/profile/assets/rooms/two.png"
                alt="heroImage"
                layout="fill"
              />
            </div>
            <div className="h-[115px] w-[115px] relative">
                <div >
                <Image
                src="/images/placeholder/profile/assets/rooms/three.png"
                alt="heroImage"
                layout="fill"
                className="z-[1]"
              />
                </div>
            
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-2xl z-[2]">
                <span className="text-base text-white">60+ More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-8 rounded-3xl bg-brandblack py-9">
        <div className="flex flex-col gap-6 ">
          <span className=" header-one">Avatar</span>
          <Image
            src="/images/placeholder/profile/assets/bg_avatar.png "
            alt="heroImage"
            width={508}
            height={258}
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <span className="text-xs text-gray-950">Add ons</span>
          <div className="grid grid-cols-3 gap-5 ">
            <div className="h-[115px] w-[115px] relative bg-primary rounded-2xl">
              <Image
                src="/images/placeholder/profile/assets/avatar/one.png"
                alt="heroImage"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="h-[115px] w-[115px] relative bg-primary rounded-2xl">
              <Image
                src="/images/placeholder/profile/assets/avatar/two.png"
                alt="heroImage"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="h-[115px] w-[115px] relative bg-primary rounded-2xl">
              <Image
                src="/images/placeholder/profile/assets/avatar/three.png"
                alt="heroImage"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="h-[115px] w-[115px] relative bg-primary rounded-2xl">
              <Image
                src="/images/placeholder/profile/assets/avatar/four.png"
                alt="heroImage"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="h-[115px] w-[115px] relative bg-primary rounded-2xl">
              <Image
                src="/images/placeholder/profile/assets/avatar/five.png"
                alt="heroImage"
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className="h-[115px] w-[115px] relative">
            
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-primary rounded-2xl z-[2]">
                <span className="text-base text-white">60+ More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
