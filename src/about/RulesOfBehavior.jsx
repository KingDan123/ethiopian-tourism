
import React from "react";
import styles from "./RulesOfBehavior.module.css";

function RulesOfBehavior() {
  return (
    <section className={styles.rulesOfBehavior}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef78a7f5d7db282acbe16b768ea4f24e49919f496cedb27b6d68008b057a3a9?placeholderIfAbsent=true&apiKey=7b58294a66e9491ca1b54fe6e6c413c7"
        alt=""
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Rules of Behavior
          <br />
          Ethiopia
        </h2>
        <div className={styles.circleIcon} aria-hidden="true" />
      </div>
    </section>
  );
}

export default RulesOfBehavior;
