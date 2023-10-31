"use client";

import React from "react";

import SharedNavbar from "@/layers/Root/components/shared/SharedNavbar";

import StickyNavbar from "../shared/StickyNavbar";

const NavbarOfNewsDetail = () => {
  return (
    <header className="relative md:mb-20">
      <StickyNavbar />
      <SharedNavbar fillColor="md:fill-white/50" />
    </header>
  );
};

export default NavbarOfNewsDetail;
