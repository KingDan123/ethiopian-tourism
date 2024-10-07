
import React from "react";
import styles from "./EthiopiaExplorer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="../img/Ethiopian-Tourism-logo-1.png"
        alt="Ethiopia Explorer Logo"
        className={styles.footerLogo}
      />
      <div className={styles.footerLinks}>
        <div className={styles.footerColumn}>
          <h3>About</h3>
          <a href="#about-us">About us</a>
          <a href="#features">Features</a>
          <a href="#news">News & Blogs</a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className={styles.footerColumn}>
          <h3>Support</h3>
          <a href="#faq">FAQs</a>
          <a href="#support-center">Support Centre</a>
          <a href="#feedback">Feedback</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
