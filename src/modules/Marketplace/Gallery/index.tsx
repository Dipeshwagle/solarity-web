import React, { FC } from "react";
import GalleryRow from "./GalleryRow";
import { Gallery } from "modal/marketplace";

const Gallery: FC<Gallery> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-6 mt-9">
      {rows.map((row, index) => (
        <GalleryRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Gallery;
