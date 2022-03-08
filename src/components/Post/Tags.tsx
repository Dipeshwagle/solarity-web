import React from "react";
import { Tag } from "modal/post";

const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className="flex gap-1">
      {tags.map(({ title, type }, index) => (
        <button
          key={index}
          className={`mt-2 rounded-full badge badge-${type} text-white bg-opacity-0`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Tags;
