import { fakeTechNewsList } from "@/data/DataTechPage/fakeTechNewsList";
import {
  techStoryList,
  techStoryPackage,
} from "@/data/DataTechPage/filteredTechNews";
import { fetchNewsList } from "@/data/fetchData";
import MainTechPage from "@/layers/TechPage/components/MainTechPage";
import NavbarOfTechPage from "@/layers/TechPage/components/NavbarOfTechPage";
import React from "react";

const Tech = async () => {
  // const dataOfTech = await fetchNewsList("technology");

  return (
    <div>
      <NavbarOfTechPage />
      <main>
        <MainTechPage />
      </main>
    </div>
  );
};

export default Tech;
