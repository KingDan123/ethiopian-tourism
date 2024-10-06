import React from "react";
import styles from "./DestinationCard.module.css";

const DestinationCard = ({ image, title, description, traveler, cardSize }) => {
  //const cardSize = index % 4 === 1 || index % 4 === 2 ? "short" : "long";

  return (
    <div className="container">
      <div className="column">
        <div className={`${styles.destinationCard} ${styles[cardSize]}`}>
          <div className={styles.destinationImage} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.destinationContent}>
              <h3 className={styles.destinationTitle}>{title}</h3>
              <p className={styles.destinationDescription}>{description}</p>
              </div>
              <div className={`${styles.travelerInfo} ${styles[cardSize]}`}>
                <img src={traveler.avatar} alt={`${traveler.name}'s avatar`} className={styles.travelerAvatar} />
                <div>
                  <h4 className={styles.travelerName}>{traveler.name}</h4>
                  <p className={styles.travelerRole}>{traveler.role}</p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;