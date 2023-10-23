"use client";

import { NewsListProps, NewsProps } from "@/data/types/NewsListProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { extractTextUpToFirstComma } from "../../utils/stringMethods";
import { formatDate } from "../../utils/dateMethods";
import { useCommentsCount } from "../../utils/hooks/useCommentsCount";
import Content from "../shared/Content";

const HeroTopStories = ({ newsContent }: NewsProps) => {
  const newsStories = newsContent?.stories.slice(0, 5);

  return (
    <div className="w-full h-full pt-8 lg:w-[380px]">
      <h2 className="text-franklin max-w-lg mx-auto mb-4 md:pl-9  ">
        Top Stories
      </h2>
      <ol>
        {newsStories?.map((news, index) => (
          <li
            className="group flex max-w-lg mx-auto  [&>div]:first-of-type:pt-0
             [&>div]:last-of-type:pb-0 [&>div]:last-of-type:border-b-0 [&>div]:first-of-type:mt-0 "
            key={news.id}
          >
            <>
              <div
                className="w-5 h-5 z-10 mt-4 rounded-full text-franklin font-kanit bg-gray-31 text-xs
               hidden md:flex md:items-center md:justify-center md:shrink-0 md:mr-10"
              >
                {index + 1}
              </div>

              <div className="flex grow md:flex-row-reverse md:justify-between py-4 border-b border-gray-31">
                {/* image  */}
                <div className="mr-4 md:mr-0 border w-[75px] h-[75px] md:w-[100px] md:h-[80px] shrink-0 border-gray-31 rounded">
                  <div className="relative w-full  h-full">
                    <div
                      className="w-5 h-5 z-10 md:hidden rounded-full text-franklin font-kanit bg-gray-31 text-xs
                     flex items-center justify-center absolute top-1 left-1"
                    >
                      {index + 1}
                    </div>

                    <Link className="w-full h-full block" href="story-by-id">
                      <Image
                        src={news.thumbnailImage || "/no-image.png"}
                        alt={news.title}
                        fill
                        // width={75}
                        // height={75}
                        className="object-cover"
                      />
                    </Link>
                  </div>
                </div>
                {/* content  */}
                <Content
                  title={news.title}
                  byline={news.byline}
                  published={news.published}
                />
              </div>
            </>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HeroTopStories;
