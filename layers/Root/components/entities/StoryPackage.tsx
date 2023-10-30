"use client";

import { StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import Story from "../cards/Story";
import FeaturedStories from "./FeaturedStories";
import { usePathname } from "next/navigation";

const StoryPackage = ({
  stories,
  storyForHero,
  isHero,
}: StoryProps & { isHero: boolean }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  return (
    <div className="">
      {storyForHero === null ? null : (
        <FeaturedStories newsContent={storyForHero} isHero={isHero} />
      )}

      <ol
        className={`${
          isMainPage ? "md:max-w-container-sm lg:mr-24" : "md:max-w-2xl"
        }  mx-auto `}
      >
        {stories.stories.map((story) => (
          <Story key={story.id} singleStory={story} />
        ))}
      </ol>
    </div>
  );
};

export default StoryPackage;
