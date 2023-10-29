import LogoSVG from "@/layers/Root/icons/LogoSVG";
import Link from "next/link";
import React from "react";
import MainNavbar from "./MainNavbar";
import { LogoSVGType } from "../types";

const SharedNavbar = ({ fillColor }: LogoSVGType) => {
  return (
    <div className="h-[3rem] md:h-[5rem]">
      <div className=" absolute w-full  h-[3rem] md:h-[5rem]">
        <div className="relative left-1/2 -translate-x-1/2 max-w-container-lg mx-auto">
          <Link href="/">
            <LogoSVG fillColor={fillColor} />
          </Link>
        </div>
      </div>

      <MainNavbar />
    </div>
  );
};

export default SharedNavbar;
