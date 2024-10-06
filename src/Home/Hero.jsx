
import React from "react";
import styles from "./EthiopiaExplorer.module.css";

function Hero() {
  return (
  
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Explore <br /> Ethiopia
        </h1>
        <p className={styles.heroDescription}>
          Embark on a journey through Ethiopia's rich heritage and storied history.
          Discover the land known as the Cradle of Humankind.
        </p>
      </section>
    );
}

export default Hero;
