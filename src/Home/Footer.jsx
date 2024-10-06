
import React from "react";
import styles from "./EthiopiaExplorer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e91351b39eceb6d029d101261baa4b200454f0465522e12f46ca603c9e25e598?placeholderIfAbsent=true&apiKey=7b58294a66e9491ca1b54fe6e6c413c7"
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
