import { NewsProps } from "@/data/types/NewsListProps";
import StoriesRiver from "@/layers/Root/components/entities/StoriesRiver";
import TechFeaturedStories from "@/layers/Root/components/entities/TechFeaturedStories";
import NavbarOfTheCategoriesPage from "@/layers/Root/components/shared/NavbarOfTheCategoriesPage";
import CategoryDescription from "@/layers/Root/components/shared/CategoryDescription";
import React from "react";
import { CategoryTitleType, StoriesPackageType } from "../../types";

const Categories = ({
  newsContent,
  storyPackage,
  categoryTitle,
}: NewsProps & StoriesPackageType & CategoryTitleType) => {
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
