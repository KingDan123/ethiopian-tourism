
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.heroSection}>
    <h1 className={styles.heroTitle}>About Us</h1>
        <p className={styles.heroDescription}>
          Discover the essence of our journey, where passion meets purpose and
          creativity intertwines with innovation, creating a narrative that
          reflects our commitment to authenticity and excellence.
        </p>
    </section>
  );
}

export default Hero;
