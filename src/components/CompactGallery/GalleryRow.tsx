import React, { FC } from "react";
import GalleryRowHeader from "components/Gallery/GalleryRowHeader";
import GalleryItem from "./GalleryItem";

import { GalleryRow } from "./index";

const GalleryRow: FC<GalleryRow> = ({ title, items, detail }) => {
  return (
    <div className="flex flex-col">
      <GalleryRowHeader title={title} detail={detail} />
      <div
        className={`grid grid-cols-4 gap-3 mt-4`}
      >
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GalleryRow;
