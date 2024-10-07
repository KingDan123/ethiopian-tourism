
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Traditions from "./Traditions";
import RulesOfBehavior from "./RulesOfBehavior";
import Footer from "./Footer";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
    <main className={styles.container}>
        <img
        src="../img/Blue_Nile_Falls.jpg"
        alt=""
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
      <Header />
      <Hero />
      </div>
      </main>
      <Traditions />
      <RulesOfBehavior />
      <Footer />
      </div>
  );
}

export default AboutPage;
