"use client";

import { NewsDetailProps } from "@/data/types/NewsDetail";
import React from "react";
import NewsDetailHero from "./NewsDetailHero";

import { DetailComponents } from "../types";
import ArticleBody from "./ArticleBody";

const NewsDetail = ({ newsDetail }: NewsDetailProps) => {
  console.log(newsDetail);
  console.log(newsDetail.imageURLs);
  console.log(newsDetail.ledeImage);

  return (
    <div className="mx-auto md:max-w-container-md lg:max-w-container-lg">
      <NewsDetailHero
        title={newsDetail.title}
        summary={newsDetail.summary}
        published={newsDetail.published}
        byline={newsDetail.byline}
        ledeImage={newsDetail.ledeImage}
        imageURLs={newsDetail.imageURLs}
      />

      <ArticleBody components={newsDetail.components as DetailComponents[]} />
    </div>
  );
};

export default NewsDetail;
