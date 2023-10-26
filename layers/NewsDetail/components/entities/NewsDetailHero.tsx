import { formatDate } from "@/layers/MainPage/utils/dateMethods";
import Image from "next/image";
import React, { useState } from "react";
import CopyIconSVG from "../icons/CopyIconSVG";
import {
  DetailComponents,
  LedeImageType,
  NewsDetailProps,
} from "@/data/types/NewsDetail";

type NewsDetailHeroProps = {
  title: string;
  summary: string;
  byline: string;
  published: number;
};

const NewsDetailHero = ({
  title,
  summary,
  byline,
  published,
  ledeImage,
  
}: NewsDetailHeroProps & LedeImageType ) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col mt-4 relative">
      <div className="bg-pernod absolute bottom-72 -left-[6%] w-screen h-[1000px] -z-20"></div>
      {/* title block*/}
      <div>
        <div className="mb-4">
          <div className="font-semibold">TODO category</div>
          <h1
            className="mb-2 text-5xl font-semibold font-oswald
           bg-[length:1px_1.04em] pb-2 leading-[1.04]  bg-repeating-lines-dark "
          >
            {title}
          </h1>
          <h2 className="text-xl font-oswald font-light">{summary}</h2>
        </div>

        <div className="mb-2 text-xs font-kanit">
          <div>
            By <span className="font-bold">{byline}</span>
          </div>
          <div> {formatDate(published)} </div>
        </div>

        <div className="mb-10 flex">
          <div className="bg-white w-[30px] h-[30px] rounded-full flex justify-center">
            <Image src="/twitter.svg" alt="twitter" width={10} height={10} />
          </div>
          <div className="bg-white ml-2  w-[30px] h-[30px] rounded-full flex justify-center">
            <Image src="/facebook.svg" alt="twitter" width={14} height={14} />
          </div>
          <button onClick={handleCopy} className="ml-2 flex items-center">
            <CopyIconSVG />
            {copied ? (
              <span className="font-medium font-kanit text-sm ml-2">
                Copied!
              </span>
            ) : null}
          </button>
        </div>
      </div>
      {/* photo  block*/}
      <div className="">
        <div className="image-container">
          <div className="relative">
            <span className="image-background"></span>
            <Image
              src={ledeImage.imageURLs.default}
              width={320}
              height={320}
              className="image"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="illustration"
            />
          </div>
        </div>

        <div className="font-kanit font-light text-sm">
          <figcaption className=" italic inline text-gray-13">
            {ledeImage.caption}{" "}
          </figcaption>
          <cite className="text-gray-63 inline">{ledeImage.credit} </cite>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailHero;
