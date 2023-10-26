"use client";

import { DetailComponents, NewsDetailProps } from "@/data/types/NewsDetail";
import React, { useEffect } from "react";
import NewsDetailHero from "./NewsDetailHero";
import { fetchNewsDetailByInternalID } from "@/data/fetchData";

const NewsDetail = ({ newsDetail }: NewsDetailProps) => {
  console.log(newsDetail);
  //@ts-ignore
  const components: DetailComponents = newsDetail.components;

  return (
    <div>
      <NewsDetailHero
        title={newsDetail.title}
        summary={newsDetail.summary}
        published={newsDetail.published}
        byline={newsDetail.byline}
        ledeImage={newsDetail.ledeImage}
      />

      <div className="font-lora">
        {components.map(({ role, parts }, index) => {
          if (role === "h2") {
            return (
              <div className="pt-4" key={parts[0].text + role}>
                <div className="w-[65px] h-[22px] bg-franklin"></div>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {parts.map((part) => (
                    <>{part.text} </>
                  ))}
                </h2>
              </div>
            );
          }
          if (role === "p") {
            return (
              <p
                className={`my-4 ${
                  index === 0 || index === 1 ? "text-[22px]" : " text-lg"
                }`}
                key={parts[0].text + role}
              >
                {parts.map((part) => (
                  <>
                    {index === 0 ? (
                      <>
                        <span className="text-6xl font-bold">
                          {part.text?.charAt(0)}
                        </span>
                        <span className="">{part.text?.slice(1)}</span>
                      </>
                    ) : (
                      part.text
                    )}
                  </>
                ))}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NewsDetail;
