"use client";

import { StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import { formatDate } from "../../utils/dateMethods";
import { extractTextUpToFirstComma } from "../../utils/stringMethods";

type StoryListProps = {
  title: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  bgIndexColor: string;
  textIndexColor: string;
};

const StoryList = ({
  title,
  story,
  bgColor,
  textColor,
  borderColor,
  bgIndexColor,
  textIndexColor,
}: StoryListProps & Pick<StoryProps, "story">) => {
  const stories = story.stories;

  return (
    <div
      className={`max-w-full sticky top-10 font-kanit ${textColor}  rounded  md:max-w-container-sm lg:rounded-3xl `}
    >
      <div
        className={`relative  lg:overflow-hidden  ${bgColor} w-mobile-breaker sm:w-tablet-breaker lg:w-[500px]
           mt-20 ml-16 p-5 min-h-[475px]  lg:ml-0 lg:mt-0
           rounded lg:rounded-3xl`}
      >
        <h2
          style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
          className="absolute -left-14 -top-5 -z-10  rotate-180
           text-white text-7xl capitalize font-oswald font-bold  lg:hidden"
        >
          {title}
        </h2>

        <h2
          style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
          className="hidden lg:block absolute bottom-1 -right-1 z-10  rotate-180
          text-[118px] whitespace-pre leading-none capitalize font-oswald font-bold text-blurpre-39"
        >
          {title}
        </h2>

        <h3 className="text-xs font-kanit  font-medium  mb-1 uppercase">
          {title}
        </h3>

        <ol className=" lg:w-[320px]">
          {stories.slice(0, 5).map((story, index) => (
            <li
              key={story.id}
              className={`flex border-b ${borderColor} py-4 last:border-b-0`}
            >
              <div
                className={`${bgIndexColor} ${textIndexColor} font-kanit p-1 mt-1 mr-2 shrink-0 w-6 h-6 flex items-center justify-center rounded-full  `}
              >
                {index + 1}
              </div>

              <div>
                <h3 className="text-lg font-kanit font-medium">
                  {story.title}{" "}
                </h3>
                <p className=" text-sm font-kanit">
                  <span>{story.byline}</span>
                  <span className="font-light ml-2">
                    {formatDate(story.published, true)}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StoryList;
