import { fakeTechNewsList } from "@/data/DataTechPage/fakeTechNewsList";

export type LogoSVGType = {
  fillColor: string;
};

export type CategoryTitleType = {
  categoryTitle: string;
};

export type StoriesPackageType = {
  storyPackage: typeof fakeTechNewsList.modules;
};
