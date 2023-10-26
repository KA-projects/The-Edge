"use client";

import { NewsDetailProps } from "@/data/types/NewsDetail";
import React, { useEffect } from "react";
import NewsDetailHero from "./NewsDetailHero";
import { fetchNewsDetailByInternalID } from "@/data/fetchData";

const NewsDetail = ({ newsDetail }: NewsDetailProps) => {
  console.log(newsDetail);
  return (
    <div>
      <NewsDetailHero
        title={newsDetail.title}
        summary={newsDetail.summary}
        published={newsDetail.published}
        byline={newsDetail.byline}
      />
    </div>
  );
};

export default NewsDetail;
