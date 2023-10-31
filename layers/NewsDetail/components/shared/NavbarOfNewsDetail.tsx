"use client";

import MainNavbar from "@/layers/Root/components/shared/MainNavbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoSVG from "../../../Root/icons/LogoSVG";
import SharedNavbar from "@/layers/Root/components/shared/SharedNavbar";
import Image from "next/image";

const NavbarOfNewsDetail = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = debounce(() => {
    setIsSticky(window.scrollY > 400);
  }, 10);

  useEffect(() => {
    setIsSticky(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  return (
    <header className="relative md:mb-20">
      <div
        className={` w-full text-black bg-white drop-shadow-md fixed top-0 left-0 z-40 transition-opacity ${
          isSticky ? "opacity-95" : "opacity-0"
        }`}
      >
        <div className="h-[50px] max-w-container-lg mx-auto px-3 lg:px-0 flex justify-between items-center">
          <div className="font-kanit text-5xl">
            <Image
              src={"/logo.svg"}
              width={250}
              height={50}
              alt="plus"
              className="mb-4 mr-10"
            />
          </div>
          <div className="flex items-centerhover:opacity-50">
            <span className="font-kanit">Menu</span>

            <Image
              src={"/plus-black.svg"}
              width={25}
              height={25}
              alt="plus"
              className="inline-block ml-2 md:mb-1"
            />
          </div>
        </div>
      </div>
      <SharedNavbar fillColor="md:fill-white/50" />
    </header>
  );
};

export default NavbarOfNewsDetail;
