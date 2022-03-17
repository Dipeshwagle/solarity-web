import React from "react";
import Image from "next/image";
import classnames from "classnames";
import Tags from "components/Post/Tags";
import { Post } from "modal/post";
import Footer from "components/Post/Footer";
import { VR } from "components/Icons";

const index = ({
  data: { title, subtitle, likes, vr, type, tags, progress, user },
}: {
  data: Post;
}) => {
  return (
    <div>
      <div className="flex gap-4  bg-[#1F2125] px-5 py-3 border-l border-darkcharcoal border-r ">
        <div className="flex">
          <div className="relative mt-3 w-14 h-14">
            <Image
              src={user.avatar}
              alt={title}
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="font-bold text-secondary">{user.name}</span>
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <div className="flex">
                <span
                  className={classnames(
                    type === "featured" ? "text-base" : "text-xl",
                    "font-bold"
                  )}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
              {tags && <Tags tags={tags} />}
            </div>

            {type !== "announcement" ? (
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold">{likes}</span>
                {type !== "featured" && (
                  <span className="text-xs text-gray-950">9 hours ago</span>
                )}
              </div>
            ) : (
              <button className="rounded-full btn btn-primary">ACTIVE</button>
            )}
          </div>
          {subtitle && (
            <span
              className="mt-2 text-sm leading-5"
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            />
          )}
          {progress && (
            <div className="flex items-center justify-end w-full gap-6">
              <span className="text-xs text-gray-950">
                {progress}% Completed
              </span>
              <progress
                className="w-40 h-1 progress progress-success h"
                value={progress}
                max="100"
              ></progress>
            </div>
          )}
          {vr && (
            <div className="relative w-full h-[229px] rounded-2xl mt-4">
              <Image
                src={vr.imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              {vr.price && (
                <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                  {vr.price} $VRS
                </button>
              )}

              {vr && (
                <button className="absolute gap-3 text-lg font-bold btn rounded-3xl bottom-2 right-2 bg-transparentwhite">
                  <VR />
                  VR
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer type={type} />
    </div>
  );
};

export default index;
