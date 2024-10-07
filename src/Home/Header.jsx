
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
        src="../img/Ethiopian-Tourism-logo-1.png"
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
