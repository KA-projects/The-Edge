"use client";

import React, { useState, useLayoutEffect } from "react";
import { navbarLinks } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DialogModal from "../dialogModal/DialogModal";

const MainNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const isDark =
    pathname === "/" ||
    pathname === "/tech" ||
    pathname === "/reviews" ||
    pathname === "/cryptocurrencies" ||
    pathname === "/pursuits" ||
    pathname === "/politics";

  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [pathname, isDark]);

  return (
    <>
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
              <button onClick={openModal}>
                <span className="hidden md:inline">More</span>
                <span className="md:hidden">
                  <span className="font-kanit">Menu</span>
                </span>
                <Image
                  src={isDark ? "/plus-white.svg" : "/plus-black.svg"}
                  width={25}
                  height={25}
                  alt="plus"
                  className="inline-block ml-2 md:mb-1"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default MainNavbar;
