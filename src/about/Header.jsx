/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
    <div className={styles.logoWrapper}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a80935082e4a6f7b2c56b8834e0b24608535904a7d9a7befa76328e536165730?placeholderIfAbsent=true&apiKey=7b58294a66e9491ca1b54fe6e6c413c7"
        alt="Company Logo"
        className={styles.logo}
      />
      </div>
      </Link>
      <nav className={styles.navigation}>
      <div className={styles.navItem}>
        Destinations
      </div>
      <div className={styles.navItem}>
        About
      </div>
      <div className={styles.navItem}>
        Gallery
      </div>
      </nav>
    </header>
  );
}

export default Header;
