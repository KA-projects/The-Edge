"use client";

import React from "react";
import styles from "../styles/Navbar.module.scss";
import { navbarLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" max-w-5xl mx-auto w-full flex items-end h-[48px] px-5">
      <nav className="ml-auto pb-2 border-b text-sm md:text-base">
        <ul>
          {navbarLinks.map((link) => (
            <li className="hidden md:inline" key={link}>
              <Link href={link === "The Edge" ? "/" : link.toLowerCase()}>
                {link}
              </Link>
              <span>/</span>
            </li>
          ))}

          <li className="flex items-center">
            <span className="hidden md:inline">More</span>
            <span className="md:hidden">Menu</span>
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
