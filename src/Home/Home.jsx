
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
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5769d50b6da04fb4759dbc7c9e5549294c68834142c372f44b51dbbc1b6d4feb?placeholderIfAbsent=true&apiKey=7b58294a66e9491ca1b54fe6e6c413c7"
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
