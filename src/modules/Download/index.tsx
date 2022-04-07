import React from "react";

import CompactGallery from "components/CompactGallery";
import DownloadFeatures from "components/Download/Features";
import Articles from "components/Download/Articles";
import PlayToEarn from "components/Download/PlayToEarn";
import TimeLine from "components/Download/TimeLine";
import SystemRequirement from "components/Download/SystemRequirement";
import GamesBuiltWith from "components/Download/GamesBuiltWith";
import GalleryView from "components/Download/Gallery";

const DownloadIndex = () => {
  return (
    <div className="flex flex-col w-full gap-10 mb-20">
      <div className="flex flex-col items-center gap-4 mt-12">
        <div className=" font-bold text-[19px]">
          Building games for the Metaverse
        </div>
        <div className="text-xs ">
          Anyone can build 3D games for free. No coding required. Contribute to
          a vast metaverse, filled with amazing creations and experiences.
        </div>
      </div>
      <div className="flex flex-col">
        <CompactGallery
          rows={[
            {
              detail: "",
              items: [
                {
                  title: "Camera Templetes",
                  imageUrl: "/images/placeholder/downloads/gallaryOne.png",
                },
                {
                  title: "Avatar Controls",
                  imageUrl: "/images/placeholder/downloads/gallaryTwo.png",
                },
                {
                  title: "Enemies & Flight System",
                  imageUrl: "/images/placeholder/downloads/gallaryThree.png",
                },
                {
                  title: "Components",
                  imageUrl: "/images/placeholder/downloads/gallaryFour.png",
                },
              ],
            },
          ]}
        />

        <div className="flex justify-center">
          <button className="btn btn-secondary rounded-3xl">Download</button>
        </div>
      </div>
      <DownloadFeatures />
      <div className="flex flex-col items-center gap-4 mt-12">
        <div className=" font-bold text-[19px]">
          Articles that may interest you
        </div>
        <Articles />
      </div>
      <PlayToEarn />
      <div className="flex flex-col items-center gap-4 mt-12">
        <div className=" font-bold text-[19px]">
        Gallery Videos
        </div>
          <GalleryView/>
      </div>
      <SystemRequirement />
      <TimeLine />
      <div className="flex flex-col items-center gap-4 mt-12">
        <div className=" font-bold text-[19px]">
          Games built with The Sandbox
        </div>
        <GamesBuiltWith />
        <GamesBuiltWith />
        <div className="flex flex-col items-center gap-8 mt-4">
          <span className="text-xs text-gray-950">
            Launch the game and start making experiences by placing any of your
            ASSETS!
          </span>
          <div>
            {" "}
            <button className="rounded-full btn btn-secondary">Pre-Register Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadIndex;
