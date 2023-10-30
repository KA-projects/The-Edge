import { NewsProps } from "@/data/types/NewsListProps";
import FeaturedStories from "@/layers/Root/components/entities/FeaturedStories";
import React from "react";

const TechFeaturedStories = ({ newsContent }: NewsProps) => {
  return (
    <div className="px-2 flex flex-col sm:flex-row border-b border-b-gray-31">
      <div className="sm:w-1/2 sm:px-4 lg:px-0">
        <FeaturedStories newsContent={newsContent} isHero={false} index={0} />
      </div>
      <div className="sm:w-1/2 sm:px-4 lg:px-0">
        <FeaturedStories newsContent={newsContent} isHero={false} index={1} />
      </div>
    </div>
  );
};

export default TechFeaturedStories;
