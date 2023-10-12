"use client";

import { NewsListProps, NewsProps } from "@/data/types/NewsListProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { extractTextUpToFirstComma } from "../../utils/stringMethods";
import { formatDate } from "../../utils/dateMethods";
import { useCommentsCount } from "../../utils/hooks/useCommentsCount";

const HeroTopStories = ({ newsContent }: NewsProps) => {
  const newsStories = newsContent.stories.slice(0, 5);

  return (
    <div className="w-full h-full">
      <h2 className="text-franklin">Top Stories</h2>
      <ol>
        {newsStories.map((news, index) => (
          <li
            className="flex [&>div]:first-of-type:pt-0
             [&>div]:last-of-type:pb-0 [&>div]:last-of-type:border-b-0 "
            key={news.id}
          >
            <>
              <div className="hidden md:flex">{index + 1}</div>
              <div className="flex py-4 border-b border-gray-31">
                {/* image  */}
                <div className="mr-4 border border-gray-31 rounded">
                  <div className="relative w-[75px] h-[75px]">
                    <div
                      className="w-5 h-5 z-10 rounded-full bg-gray-31 text-xs flex items-center justify-center 
                    absolute top-1 left-1"
                    >
                      <span className="text-franklin font-kanit">
                        {index + 1}
                      </span>
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
                <div>
                  <h2 className="text-xl font-oswald leading-5 font-bold">
                    {news.title}{" "}
                  </h2>

                  <div className="flex pt-1 font-kanit text-[11px] tracking-widest uppercase">
                    <div className="text-franklin">
                      {extractTextUpToFirstComma(news.byline)}{" "}
                    </div>
                    <div className="flex ml-2 text-gray-64">
                      <div>{formatDate(news.published, true)}</div>
                      <span className="mx-2">|</span>
                      <Image
                        src="/message.svg"
                        width={12}
                        height={12}
                        alt="message"
                      />
                      <span className="ml-1">
                        {Math.floor((news.wordCount / 15) * Math.random())}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HeroTopStories;
