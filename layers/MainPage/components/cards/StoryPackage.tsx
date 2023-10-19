import { StoryProps } from "@/data/types/NewsListProps";
import React from "react";
import Story from "./Story";

const StoryPackage = ({ story }: StoryProps) => {
  return (
    <ol>
      {story.stories.map((story) => (
        <Story key={story.id} singleStory={story} />
      ))}
    </ol>
  );
};

export default StoryPackage;
