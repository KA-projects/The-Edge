"use client";

import { NewsDetailProps } from "@/data/types/NewsDetail";
import React, { useEffect } from "react";
import NewsDetailHero from "./NewsDetailHero";
import { fetchNewsDetailByInternalID } from "@/data/fetchData";
import Image from "next/image";
import TextContent from "../shared/TextContent";
import ImageContent from "../shared/ImageContent";
import { DetailComponents, ImagePart, TextPart, WebviewPart } from "../types";

const NewsDetail = ({ newsDetail }: NewsDetailProps) => {
  console.log(newsDetail);
  //@ts-ignore
  const components: DetailComponents[] = newsDetail.components;

  const isText = (
    detailComponents: DetailComponents
  ): detailComponents is TextPart => {
    return detailComponents.role === "p" || detailComponents.role === "h2";
  };

  const isImage = (
    detailComponents: DetailComponents
  ): detailComponents is ImagePart => {
    return detailComponents.role === "image";
  };

  const isWebView = (
    detailComponents: DetailComponents
  ): detailComponents is WebviewPart => {
    return detailComponents.role === "webview";
  };

  const htmlParser = (xmlString: string) => {
    // const doc = new DOMParser().parseFromString(xmlString, "text/html");

    return <div dangerouslySetInnerHTML={{ __html: xmlString }}></div>;
  };

  return (
    <div className="mx-auto md:max-w-container-md">
      <NewsDetailHero
        title={newsDetail.title}
        summary={newsDetail.summary}
        published={newsDetail.published}
        byline={newsDetail.byline}
        ledeImage={newsDetail.ledeImage}
      />

      <div className="font-lora">
        {components.map((component, index) => {
          if (isWebView(component)) {
            return (
              <div
                key={component.html.slice(0, 70)}
                className="[&_a:hover]:shadow-highlight-franklin [&_a]:shadow-underline-black "
              >
                {htmlParser(component.html)}
              </div>
            );
          }

          if (isText(component)) {
            return (
              <TextContent
                key={component.parts[0].text + index}
                role={component.role}
                parts={component.parts}
                index={index}
              />
            );
          }

          if (isImage(component)) {
            return (
              <ImageContent
                key={component.id}
                id={component.id}
                imageURLs={component.imageURLs}
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default NewsDetail;
