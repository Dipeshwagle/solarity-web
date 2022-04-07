import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import { Play } from "components/Icons";

const Gallery = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/one.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/two.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/three.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/four.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/five.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/six.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/seven.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <div className="relative rounded-3xl">
        <Image
          src="/images/placeholder/downloads/galleryvideos/eight.png"
          alt="image one"
          className="rounded-2xl"
          width={239}
          height={180}
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Play
            className="cursor-pointer "
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Gallery;
