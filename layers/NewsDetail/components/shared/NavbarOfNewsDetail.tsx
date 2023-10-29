import MainNavbar from "@/layers/Root/components/MainNavbar";
import Link from "next/link";
import React from "react";
import LogoSVG from "../../../Root/icons/LogoSVG";
import SharedNavbar from "@/layers/Root/components/SharedNavbar";

const NavbarOfNewsDetail = () => {
  return (
    <header className="relative md:mb-20">
      <SharedNavbar fillColor="md:fill-white/50" />
    </header>
  );
};

export default NavbarOfNewsDetail;
