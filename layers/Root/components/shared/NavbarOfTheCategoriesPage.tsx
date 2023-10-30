import SharedNavbar from "@/layers/Root/components/shared/SharedNavbar";
import React from "react";
import { CategoryTitleType } from "../../types";

const NavbarOfTheCategoriesPage = ({ categoryTitle }: CategoryTitleType) => {
  return (
    <header className="relative flex flex-col justify-between bg-blurpre h-[523px] md:min-h-[485px]">
      <div>
        <SharedNavbar fillColor="fill-black/30" />
        <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-b from-gray-13/60 to-gray-13"></div>
      </div>

      <div
        className="max-w-container-lg w-full mx-auto grid
       grid-flow-col grid-cols-4 auto-cols-max gap-5 py-5 px-2 md:pl-10 lg:px-0
        md:grid-cols-7 md:gap-8 md:grid-rows-1"
      >
        <div className=" col-start-1 col-end-8 row-start-1 w-full lg:col-start-2 lg:row-start-1">
          <div className="font-kanit font-medium text-sm uppercase text-franklin tracking-[0.15em]">
            All stories tagged:
          </div>
          <h1 className="font-oswald capitalize text-7xl font-medium tracking-tighter md:text-9xl">
            {categoryTitle}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default NavbarOfTheCategoriesPage;
