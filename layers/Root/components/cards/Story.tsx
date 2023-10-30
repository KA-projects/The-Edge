"use client";

import { SingleStory, StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import Content from "../shared/Content";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Story = ({ singleStory }: SingleStory) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <li className="group py-4 border-b border-b-gray-31 last-of-type:border-b-0 hover:bg-gray-18">
      <div className="flex items-center justify-between font-kanit sm:px-6">
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
              internalID={singleStory.internalID}
            />
          </div>
        </div>

        <div
          className={`${
            isMainPage
              ? " sm:w-[100px] sm:h-[100px]"
              : "sm:w-[200px] sm:h-[200px] md:h-[133px]"
          } w-[75px] h-[75px] ml-4 relative  shrink-0 border border-gray-31`}
        >
          <Image
            src={singleStory.image || "/no-image.png"}
            alt={singleStory.title}
            fill
            className=" object-cover"
          />
        </div>
      </div>
    </li>
  );
};

export default Story;
