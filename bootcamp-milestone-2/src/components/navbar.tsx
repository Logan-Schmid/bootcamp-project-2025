import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link href="index.html">Logan Schmid</Link>
        </h1>
        <ul className={styles["nav-list"]}>
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li>
            <Link href="blog.html">Blog</Link>
          </li>
          <li>
            <Link href="portfolio.html">Portfolio</Link>
          </li>
          <li>
            <Link href="resume.html">Resume</Link>
          </li>
          <li>
            <Link href="contact.html">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
