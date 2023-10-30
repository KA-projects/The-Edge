import { fakeTechNewsList } from "@/data/DataTechPage/fakeTechNewsList";
import {
  techStoryList,
  techStoryPackage,
} from "@/data/DataTechPage/filteredTechNews";
import { fetchNewsList } from "@/data/fetchData";
import { NewsProps, StoryProps } from "@/data/types/NewsListProps";
import StoriesRiver from "@/layers/TechPage/components/entities/StoriesRiver";
import TechFeaturedStories from "@/layers/TechPage/components/entities/TechFeaturedStories";
import NavbarOfTechPage from "@/layers/TechPage/components/shared/NavbarOfTechPage";
import TechDescription from "@/layers/TechPage/components/shared/TechDescription";
import React from "react";

const Tech = async () => {
  // const dataOfTech = await fetchNewsList("technology");

  return (
    <div>
      <NavbarOfTechPage />
      <main className=" max-w-container-lg mx-auto">
        <TechDescription />
        <TechFeaturedStories
          newsContent={techStoryPackage[0] as NewsProps["newsContent"]}
        />
        <StoriesRiver storyPackage={techStoryPackage} />
      </main>
      <div className="bg-red-500 h-[500px]"> footer</div>
    </div>
  );
};

export default Tech;
