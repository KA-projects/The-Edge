import { fakeTechNewsList } from "@/data/DataTechPage/fakeTechNewsList";
import {
  techStoryList,
  techStoryPackage,
} from "@/data/DataTechPage/filteredTechNews";
import { fetchNewsList } from "@/data/fetchData";
import { NewsProps, StoryProps } from "@/data/types/NewsListProps";
import Categories from "@/layers/Root/components/entities/Categories";

import React from "react";

const Tech = async () => {
  // const dataOfTech = await fetchNewsList("technology");
  // const data = dataOfTech.modules.filter(
  //   (story) => story.type === "story_package"
  // );

  return (
    <div>
      <Categories
        categoryTitle="tech"
        newsContent={techStoryPackage[0] as NewsProps["newsContent"]}
        storyPackage={techStoryPackage}
      />
    </div>
  );
};

export default Tech;
