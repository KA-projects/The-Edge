"use client";

import { NewsProps } from "@/data/types/NewsListProps";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "../../utils/dateMethods";
import { useCommentsCount } from "../../utils/hooks/useCommentsCount";

type isHero = {
  isHero: boolean;
};

const HeroTitle = ({ newsContent, isHero }: NewsProps & isHero) => {
  const news = newsContent.stories[0];
  const commentCount = useCommentsCount();

  return (
    <div
      className={`group w-full ${
        isHero ? "lg:w-[710px]" : "lg:w-full"
      } lg:w-[710px] pt-8 shrink-0`}
    >
      {isHero ? (
        <div
          className="text-6xl z-[2] font-semibold absolute top-0 drop-shadow-2xl 
      lg:-rotate-90 lg:text-9xl lg:-left-80 lg:top-64"
        >
          The Edge
        </div>
      ) : null}

      <div className="ml-10 md:ml-0 lg:mr-24 lg:ml-4  ">
        <div className="w-full h-full ">
          <Link
            // href={`/news/${news.internalID}`}
            href={`/news/S2A5AWT1UM0W01`}
            className="block w-full h-full  relative min-h-full max-w-full max-h-[464px]"
            tabIndex={1}
            aria-hidden
          >
            <Image
              src={news.image || "/no-image.png"}
              priority
              alt={news.title}
              className="object-cover rounded -z-10 "
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
              width={600}
              height={500}
            />
          </Link>

          {/* <div className="absolute h-[10%] w-full top-0 left-0  bg-gradient-to-b from-black/50 to-transparent"></div>
          <div className="absolute h-[10%] w-full bottom-0 left-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute h-full w-[6%] bottom-0 left-0 bg-gradient-to-r from-black/30 to-transparent"></div> */}
        </div>
      </div>

      <div
        className={`relative border-b  -top-5 border-gray-31 pb-5 ${
          isHero ? "lg:pl-40 lg:pr-20" : "lg:pl-16 lg:pr-24"
        } `}
      >
        <div className="">
          <h2
            className={`text-5xl mb-4 font-oswald font-bold leading-[.9] tracking-tight`}
          >
            <Link
              className="group-hover:shadow-highlight-blurple"
              // href={`/news/${news.internalID}`}
              href={`/news/S2A5AWT1UM0W01`}
            >
              {" "}
              {news.title}
            </Link>
          </h2>

          <p className=" font-lora mb-4 text-lg leading-5 tracking-[.01rem]">
            {news.autoGeneratedSummary}
          </p>

          <div className="font-kanit text-xs tracking-widest flex gap-x-2">
            <div className="uppercase text-franklin">{news.byline}</div>
            <div className="flex text-gray-64">
              <div> {formatDate(news.published)}</div>
              <div className="flex">
                <div className="mx-2 ">|</div>

                <Image
                  src="/message.svg"
                  width={12}
                  height={12}
                  alt="message"
                />

                <div className="ml-1">{commentCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
