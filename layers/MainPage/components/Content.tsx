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
    <div className="max-w-5xl relative mx-auto w-full flex flex-col mb-5 md:flex-row px-2">
      <HeroTitle newsContent={heroContent} />
      <HeroTopStories newsContent={storyPackage} />
    </div>
  );
};

export default Content;
