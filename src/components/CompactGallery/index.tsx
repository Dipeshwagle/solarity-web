import React, { FC } from "react";
import GalleryRow from "./GalleryRow";


export type GalleryItem = {
  title: string;
  imageUrl: string;
};

export type GalleryRow = {
  title?: string;
  detail?: string;
  items: GalleryItem[];
};

export type Gallery = {
  rows: GalleryRow[];
};

const Gallery: FC<Gallery> = ({ rows }) => {
  return (
    <div className="flex flex-col gap-6 my-9">
      {rows.map((row, index) => (
        <GalleryRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Gallery;
