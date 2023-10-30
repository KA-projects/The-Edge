import { StoryProps } from "@/data/types/NewsListProps";
import StoryPackage from "@/layers/Root/components/entities/StoryPackage";
import React from "react";
import { TechStoryPackageType } from "../../types";
import Border from "@/layers/Root/components/shared/Border";
import StickyStoryList from "@/layers/Root/components/cards/StickyStoryList";

const StoriesRiver = ({
  storyPackage,
}: {
  storyPackage: TechStoryPackageType;
}) => {
  return (
    <div className="px-2 pt-20">
      <div className="lg:flex">
        <ol className="lg:max-w-container-md lg:mr-8 min-[1100px]:mr-24">
          {storyPackage.map((story) => (
            <li key={story.id}>
              <StoryPackage
                stories={story as StoryProps["stories"]}
                storyForHero={null}
                isHero={false}
              />

              <Border />
            </li>
          ))}
        </ol>

        <div className="max-w-[300px] max-h-[6000px] hidden lg:block">
          <StickyStoryList
            title="most popular"
            titleColor="text-blurpre"
            bgColor="bg-transparent"
            textColor="text-white"
            borderColor="border-gray-63"
            bgIndexColor="bg-transparent"
            textIndexColor="text-franklin"
            stories={storyPackage[0] as StoryProps["stories"]}
            isLocatedOnNewsDetailPage={true}
          />
        </div>
      </div>
    </div>
  );
};

export default StoriesRiver;
