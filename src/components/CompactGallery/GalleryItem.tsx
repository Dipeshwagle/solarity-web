import React from "react";
import { FC } from "react";
import Image from "next/image";
import { GalleryItem } from "./index";

const GalleryItem: FC<GalleryItem> = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col group ">
      <div className="flex flex-col justify-center gap-2 p-2 transition-all ease-in rounded-t-3xl rounded-b-3xl bg-brandblack">
        <div className="relative h-[218px] w-full flex justify-center items-center ">
          <Image
            src={imageUrl}
            alt="nft item"
            layout="fill"
            className="rounded-3xl"
          />
          </div>
          <div>

          <span className="px-2 mb-4 text-xs">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
