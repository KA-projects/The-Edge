import { StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import Story from "./Story";
import HeroTitle from "../entities/HeroTitle";

const StoryPackage = ({ story, storyForHero }: StoryProps) => {
  return (
    <div>
      {storyForHero === null ? null : (
        <HeroTitle newsContent={storyForHero} isHero={false} />
      )}

      <ol className=" md:max-w-container-sm mx-auto  lg:mr-24">
        {story.stories.map((story) => (
          <Story key={story.id} singleStory={story} />
        ))}
      </ol>
    </div>
  );
};

export default StoryPackage;
