"use client";

import { NewsListProps, NewsProps } from "@/data/types/NewsListProps";
import HeroTitle from "./entities/HeroTitle";
import HeroTopStories from "./entities/HeroTopStories";

const Hero = ({ newsList }: NewsListProps) => {
  const heroContent = newsList[0];
  const haveMoreFiveStories = newsList.filter(
    (news) => news.stories.length >= 5
  );
  const storyPackage = haveMoreFiveStories[0];

  return (
    <div
      className="max-w-container-lg relative mx-auto mt-14 w-full
     flex flex-col mb-5 md:max-w-[560px] lg:max-w-container-lg lg:flex-row px-2 lg:px-0"
    >
      <HeroTitle newsContent={heroContent} isHero={true} />
      <HeroTopStories newsContent={storyPackage} />
    </div>
  );
};

export default Hero;
