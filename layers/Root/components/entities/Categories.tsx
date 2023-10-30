import { NewsProps } from "@/data/types/NewsListProps";
import StoriesRiver from "@/layers/Root/components/entities/StoriesRiver";
import TechFeaturedStories from "@/layers/Root/components/entities/TechFeaturedStories";
import NavbarOfTheCategoriesPage from "@/layers/Root/components/shared/NavbarOfTheCategoriesPage";
import CategoryDescription from "@/layers/Root/components/shared/CategoryDescription";
import { TechStoryPackageType } from "@/layers/TechPage/types";
import React from "react";
import { CategoryTitleType } from "../../types";

const Categories = ({
  newsContent,
  storyPackage,
  categoryTitle,
}: NewsProps & { storyPackage: TechStoryPackageType } & CategoryTitleType) => {
  return (
    <>
      <NavbarOfTheCategoriesPage categoryTitle={categoryTitle} />
      <main className="max-w-container-lg mx-auto">
        <CategoryDescription />
        <TechFeaturedStories newsContent={newsContent} />
        <StoriesRiver storyPackage={storyPackage} />
      </main>
      <div className="bg-red-500 h-[500px]"> footer</div>
    </>
  );
};

export default Categories;
