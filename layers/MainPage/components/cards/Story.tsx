import { SingleStory, StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import Content from "../shared/Content";
import Image from "next/image";

const Story = ({ singleStory }: SingleStory) => {
  return (
    <li className="flex items-center justify-between py-4 font-kanit border-b border-b-gray-31 last-of-type:border-b-0">
      <div className="flex items-center">
        <div
          style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
          className="hidden md:block mr-4 rotate-180 border-l-2 border-l-franklin text-gray-64"
        >
          {singleStory.primaryCategory ? singleStory.primaryCategory : "null"}
        </div>
        <div>
          <h2 className=" mb-2  text-gray-64 md:hidden">
            <span className="pb-1 uppercase text-xs border-b border-franklin">
              {singleStory.primaryCategory
                ? singleStory.primaryCategory
                : "null"}
            </span>
          </h2>
          <Content
            title={singleStory.title}
            byline={singleStory.byline}
            published={singleStory.published}
          />
        </div>
      </div>

      <div className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] ml-4 relative  shrink-0">
        <Image
          src={singleStory.image || "/no-image.png"}
          alt={singleStory.title}
          fill
          className=" object-cover"
        />
      </div>
    </li>
  );
};

export default Story;
