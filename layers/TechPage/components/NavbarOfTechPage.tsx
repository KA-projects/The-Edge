import SharedNavbar from "@/layers/Root/components/SharedNavbar";
import React from "react";

const NavbarOfTechPage = () => {
  return (
    <header className="relative bg-blurpre min-h-[485px]">
      <SharedNavbar fillColor="fill-black/30" />
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-b from-gray-13/60 to-gray-13"></div>
    </header>
  );
};

export default NavbarOfTechPage;
