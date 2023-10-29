"use client";

import React, { useEffect } from "react";
import { navbarLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainNavbar = () => {
  const pathname = usePathname();

  const isDark = pathname === "/" || pathname === "/tech";

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.remove("dark-mode");
    }
  }, [pathname, isDark]);

  return (
    <div className="max-w-container-lg mx-auto w-full flex items-end h-[48px] md:h-[80px] px-5">
      <nav className="ml-auto z-10 pb-2 border-b border-b-black dark:border-white text-sm text-black dark:text-white md:text-base">
        <ul className="md:text-xl ">
          {navbarLinks.map((link) => (
            <li
              className="hidden md:inline [&>a]:first-of-type:text-2xl [&>a]:first-of-type:font-semibold"
              key={link}
            >
              <Link
                className="hover:opacity-50 hover:transition-all "
                href={link === "The Edge" ? "/" : "/" + link.toLowerCase()}
              >
                {link}
              </Link>
              <span className="mx-4">/</span>
            </li>
          ))}

          <li className="flex items-center md:inline hover:opacity-50">
            <span className="hidden md:inline">More</span>
            <span className="md:hidden">
              <span className="font-kanit">Menu</span>
            </span>
            <Image
              src={isDark ? "/plus-white.svg" : "/plus-black.svg"}
              width={25}
              height={25}
              alt="plus"
              className="inline-block ml-2 mb-1"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavbar;
