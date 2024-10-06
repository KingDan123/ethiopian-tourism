
import React from "react";
import styles from "./EthiopiaExplorer.module.css"

function InfoCard({ title, description, align }) {
  const cardClass = align === "right" ? styles.infoCardRight : styles.infoCard;
  const contentClass =
    align === "right" ? styles.infoCardContentRight : styles.infoCardContent;
  const descriptionClass =
    align === "right"
      ? styles.infoCardDescriptionRight
      : styles.infoCardDescription;

  return (
    <article className={cardClass}>
      <div className={contentClass}>
        <h2 className={styles.infoCardTitle}>{title}</h2>
        <p className={descriptionClass}>{description}</p>
      </div>
    </article>
  );
}

export default InfoCard;
