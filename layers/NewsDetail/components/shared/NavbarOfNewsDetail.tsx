import MainNavbar from "@/layers/Root/components/MainNavbar";
import Link from "next/link";
import React from "react";
import LogoSVG from "../icons/LogoSVG";

const NavbarOfNewsDetail = () => {
  return (
    <header className="relative">
      <div className="h-[3rem] md:h-[5rem]">
        <Link href="/">
          <LogoSVG />
        </Link>

        <MainNavbar />
      </div>
    </header>
  );
};

export default NavbarOfNewsDetail;
