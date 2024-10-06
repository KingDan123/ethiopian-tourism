
import React from "react";
import styles from "./EthiopiaExplorer.module.css";
import InfoCard from "./InfoCard";

const infoData = [
  {
    title: "History and Heritage",
    description:
      "Ethiopia holds a significant position at the crossroads of African cultures and history, serving as a cornerstone in the region known for its diverse heritage and pivotal role on the continent.",
    align: "left",
  },
  {
    title: "People and Culture",
    description:
      "Ethiopia's vibrant culture is a tapestry woven from the diverse threads of its people, creating a rich and unique cultural identity that defines the essence of the nation.",
    align: "right",
  },
];

function InfoSection() {
  return (
    <section className={styles.infoSection}>
      {infoData.map((info, index) => (
        <InfoCard key={index} {...info} />
      ))}
    </section>
  );
}

export default InfoSection;
