"use client";

import React from "react";
import styles from "../styles/Navbar.module.scss";
import { navbarLinks } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.max_w_container_lg}>
      <nav>
        <ul className={styles.navbar_links}>
          {navbarLinks.map((link) => (
            <li key={link}>
              <Link
                className={styles.navbar_links_link}
                href={link === "The Edge" ? "/" : link.toLowerCase()}
              >
                {link}
              </Link>
              <span className={styles.navbar_links_span}>/</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
