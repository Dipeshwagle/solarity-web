import React, { useState, FC } from "react";
import classname from "classnames";

interface Iprops {
  tags: string[];
  onChange: (tag: string) => void;
}

const TagsCollection: FC<Iprops> = ({ tags }) => {
  const [activeTagIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="flex flex-wrap gap-2 ">
      {tags.map((tag, index) => (
        <button
          className={classname(
            activeTagIndex === index ? "btn-secondary" : "btn-primary",
            "rounded-full btn btn-sm  h-7 text-sm normal-case font-normal"
          )}
          key={index}
          onClick={() => {
            setActiveTabIndex(index);
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsCollection;
