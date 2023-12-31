"use client";

import { StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import { formatDate } from "../../../MainPage/utils/dateMethods";
import { extractTextUpToFirstComma } from "../../../MainPage/utils/stringMethods";
import Link from "next/link";

type StoryListProps = {
  title: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  bgIndexColor: string;
  textIndexColor: string;
  isLocatedOnNewsDetailPage: boolean;
  titleColor: string;
};

const StickyStoryList = ({
  title,
  titleColor,
  stories,
  bgColor,
  textColor,
  borderColor,
  bgIndexColor,
  textIndexColor,
  isLocatedOnNewsDetailPage,
}: StoryListProps & Pick<StoryProps, "stories">) => {
  return (
    <div
      className={`max-w-full sticky top-10 font-kanit ${textColor}  rounded  md:max-w-container-sm lg:rounded-3xl `}
    >
      <div
        className={`relative  lg:overflow-hidden   ${bgColor} ${
          isLocatedOnNewsDetailPage ? "lg:w-[300px]" : "lg:w-[500px]"
        } w-mobile-breaker sm:w-tablet-breaker 
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
          className={`hidden ${titleColor} ${
            isLocatedOnNewsDetailPage
              ? "  -z-10 text-[90px] bottom-6"
              : "  z-10 text-[110px] bottom-0"
          } lg:block absolute   -right-1   rotate-180
           whitespace-pre leading-none tracking-tighter capitalize font-oswald font-bold   `}
        >
          {title}
        </h2>

        {isLocatedOnNewsDetailPage ? null : (
          <h3 className="text-xs font-kanit  font-medium  mb-1 uppercase">
            {title}
          </h3>
        )}

        <ol
          className={`${
            isLocatedOnNewsDetailPage ? "lg:w-full" : "lg:w-[320px]"
          }`}
        >
          {stories.stories.slice(0, 5).map((story, index) => (
            <li
              key={story.id}
              className={`flex  ${borderColor} py-4 ${
                isLocatedOnNewsDetailPage ? "" : "last:border-b-0 border-b"
              }`}
            >
              <div
                className={`${bgIndexColor} ${textIndexColor} font-bold font-kanit p-1 mt-1 mr-2 shrink-0 w-6 h-6 flex items-center justify-center rounded-full  `}
              >
                {index + 1}
              </div>

              <div>
                <h3 className="text-lg hover:text-franklin leading-[1] font-kanit font-medium">
                  <Link href={`/news/${story.internalID}`}>{story.title} </Link>
                </h3>
                {isLocatedOnNewsDetailPage ? null : (
                  <p className=" text-sm font-kanit">
                    <span>{story.byline}</span>
                    <span className="font-light ml-2">
                      {formatDate(story.published, true)}
                    </span>
                  </p>
                )}

                {isLocatedOnNewsDetailPage ? (
                  <hr className={`${borderColor} w-2/3 -ml-7 mt-4 `} />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StickyStoryList;
