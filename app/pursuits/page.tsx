import { fetchNewsList } from "@/data/fetchData";
import { NewsProps } from "@/data/types/NewsListProps";
import Categories from "@/layers/Root/components/entities/Categories";
import Test from "@/layers/Root/components/entities/Test";
import React from "react";

const Pursuits = async () => {
  const dataOfView = await fetchNewsList("pursuits");
  const data = dataOfView.modules.filter(
    (story) =>
      (story.type === "story_package" || story.type === "story_list") &&
      story.stories.length >= 2
  );

  return (
    <div>
      <Categories
        categoryTitle="pursuits"
        newsContent={data[0] as NewsProps["newsContent"]}
        storyPackage={data}
      />
      <Test storyPackage={data} />
    </div>
  );
};

export default Pursuits;
