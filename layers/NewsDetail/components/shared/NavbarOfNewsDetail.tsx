import MainNavbar from "@/layers/Root/components/MainNavbar";
import Link from "next/link";
import React from "react";
import LogoSVG from "../icons/LogoSVG";

const NavbarOfNewsDetail = () => {
  return (
    <header className="relative md:mb-20">
      <div className="h-[3rem] md:h-[5rem]">
        <div className=" absolute w-full  h-[3rem] md:h-[5rem]">
          <div className="relative left-1/2 -translate-x-1/2 max-w-container-lg mx-auto">
            <Link href="/">
              <LogoSVG />
            </Link>
          </div>
        </div>

        <MainNavbar />
      </div>
    </header>
  );
};

export default NavbarOfNewsDetail;
