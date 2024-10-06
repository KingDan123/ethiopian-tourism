
import React from "react";
import styles from "./EthiopiaExplorer.module.css";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
    <div className={styles.logoWrapper}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a80935082e4a6f7b2c56b8834e0b24608535904a7d9a7befa76328e536165730?placeholderIfAbsent=true&apiKey=7b58294a66e9491ca1b54fe6e6c413c7"
        className={styles.logo}
        alt="Ethiopia Explorer Logo"
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
