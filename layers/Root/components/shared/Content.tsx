"use client";

import Link from "next/link";
import React from "react";
import { extractTextUpToFirstComma } from "../../../MainPage/utils/stringMethods";
import { formatDate } from "../../../MainPage/utils/dateMethods";
import Image from "next/image";
import { useCommentsCount } from "../../../MainPage/utils/hooks/useCommentsCount";

type ContentProps = {
  title: string;
  byline: string;
  published: number;
  internalID: string;
};

const Content = ({ title, byline, published, internalID }: ContentProps) => {
  const commentCount = useCommentsCount();

  return (
    <div className="md:pr-2 max-w-content-block-compact">
      <h2 className="group-hover:underline group-hover:decoration-franklin text-2xl font-kanit leading-6 font-bold">
        <Link href={`/news/${internalID}`}> {title} </Link>
      </h2>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between pt-1 font-kanit text-[11px] tracking-widest uppercase">
        <div className="text-franklin hover:underline hover:decoration-franklin">
          {extractTextUpToFirstComma(byline)}{" "}
        </div>
        <div className="flex justify-end w-fit whitespace-nowrap items-center text-gray-64">
          <div>{formatDate(published, true)}</div>
          <span className="mx-2">|</span>
          <Image src="/message.svg" width={12} height={12} alt="message" />
          <span className="ml-1">
            {/* {Math.floor((news.wordCount / 15) * Math.random())} */}
            {commentCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
