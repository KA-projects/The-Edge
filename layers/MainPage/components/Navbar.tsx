"use client";

import React from "react";
import styles from "../styles/Navbar.module.scss";
import { navbarLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" max-w-container-lg mx-auto w-full flex items-end h-[48px] mt-8 px-5">
      <nav className="ml-auto pb-2 border-b text-sm md:text-base">
        <ul className="md:text-lg ">
          {navbarLinks.map((link) => (
            <li
              className="hidden md:inline first-of-type:text-2xl first-of-type:font-semibold"
              key={link}
            >
              <Link
                className="hover:opacity-50 hover:transition-all"
                href={link === "The Edge" ? "/" : link.toLowerCase()}
              >
                {link}
              </Link>
              <span className="mx-4">/</span>
            </li>
          ))}

          <li className="flex items-center md:inline hover:opacity-50">
            <span className="hidden md:inline font-medium">More</span>
            <span className="md:hidden">
              <span>Menu</span>
            </span>
            <Image
              src="/plus.svg"
              width={20}
              height={20}
              alt="plus"
              className="inline-block ml-2"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
