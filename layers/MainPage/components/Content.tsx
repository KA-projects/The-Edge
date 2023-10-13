"use client";

import { NewsListProps, NewsProps } from "@/data/types/NewsListProps";
import HeroTitle from "./shared/HeroTitle";
import HeroTopStories from "./shared/HeroTopStories";

const Content = ({ newsList }: NewsListProps) => {
  const heroContent = newsList[0];
  const haveMoreFiveStories = newsList.filter(
    (news) => news.stories.length >= 5
  );
  const storyPackage = haveMoreFiveStories[0];

  return (
    <div
      className="max-w-container-lg relative mx-auto mt-14 w-full
     flex flex-col mb-5 md:flex-row px-2 lg:px-0"
    >
      <HeroTitle newsContent={heroContent} />
      <HeroTopStories newsContent={storyPackage} />
    </div>
  );
};

export default Content;
