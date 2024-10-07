
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import DestinationSection from "./DestinationSection";
import Footer from "./Footer";
import styles from "./EthiopiaExplorer.module.css";
import InfoSection from "./InfoSection";
function EthiopiaExplorer() {
  return (
    <div>
       <main className={styles.container}>
       <img
        loading="lazy"
        src="../img/photo2jpg.jpg"
        className={styles.backgroundImage}
        alt=""
      />
      <div className={styles.content}>
      <Header />
        <Hero />
        </div>
        <InfoSection />
      </main>
        <DestinationSection />
      <Footer />
    </div>
  );
}

export default EthiopiaExplorer;
