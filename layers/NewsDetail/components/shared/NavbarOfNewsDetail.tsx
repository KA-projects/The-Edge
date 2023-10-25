import MainNavbar from "@/layers/Root/components/MainNavbar";
import Link from "next/link";
import React from "react";

const NavbarOfNewsDetail = () => {
  return (
    <div className="flex bg-pernod h-[3rem]">
      <div className="w-[70%] relative">
        <div className="absolute -top-2 -left-3 whitespace-pre">
          <Link
            className="hover:opacity-50 hover:transition-all text-6xl font-bold text-white"
            href="/"
          >
            The Edge
          </Link>
        </div>
      </div>

      <div>
        <MainNavbar />
      </div>
    </div>
  );
};

export default NavbarOfNewsDetail;
