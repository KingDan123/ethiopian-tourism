import React from "react";
import styles from "./DestinationCard.module.css";
import DestinationCard from "./DestinationCard";
import { Link } from 'react-router-dom';
const destinations = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/675b505e75a083cf88a52a49e55959c8b4e9791c7b8a985ac56ebe8193ec15ad?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    title: "Danakil Depression",
    description:
      "The Danakil Depression stands as a marvel of nature, showcasing a landscape dotted with unique features like sulfur springs and salt flats, creating an otherworldly oasis in the heart of Ethiopia.",
    traveler: {
      name: "Wazeem Al Mulk",
      role: "Traveler",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6b8ff787c8ad7392bbaad304f162c290c1da3bb3315123d188e61fd93407f86?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    },
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/09de035f19c540746943b61c8eb98d6100778f4bc6d4aa2a8a8556c738319655?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    title: "Mercato Market, Addis Ababa",
    description:
      "Africa's largest open-air market situated in Addis Ababa, Ethiopia",
    traveler: {
      name: "Benjamin Voros",
      role: "Traveler",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2280584db52f576af8af0deb588d8671a55bfba02158550e00f9832d7a5a1ad8?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    },
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0189aee69e5742fef79394fd5a8bad4d128d488be63d1ff5a980e3adc0503a26?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    title: "Rock-Hewn Churches of Lalibela",
    description:
      "The Rock-Hewn Churches of Lalibela in Ethiopia are a testament to human ingenuity and faith, carved into solid rock centuries ago",
    traveler: {
      name: "Wazeem Al Mulk",
      role: "Traveler",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6b8ff787c8ad7392bbaad304f162c290c1da3bb3315123d188e61fd93407f86?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    },
  }
  ,
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d1c4a68d88373530c322dab7d479d5bfa65b460145cc1a15cb499a6ef9712320?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    title: "Simien Mountains National Park",
    description:
      "The Park is captivates with its stunning landscapes, towering peaks, and rich biodiversity, offering a unique and unforgettable experience for visitors.",
    traveler: {
      name: "Jonatan Pie",
      role: "Influencer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d1babed10bda33e2339d9dc59a7d4ff5513624fae501e9463b13e43fe70f52df?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    },
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e98a7d1e1d017878634749f02611bf3a0d22d8c8c4439e7275af1bf22f40727b?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    title: "Gheralta Rock",
    description:
      "The Gheralta Rock formations in Ethiopia stand as a captivating testament to nature's artistry and human history, harmoniously intertwined in a stunning landscape",
    traveler: {
      name: "garrett parker",
      role: "Traveler",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/37b4d3b849ecb1465daef94f8526a917000fa0b072d159329e47c4ba017cfb93?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    },
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f95e104f2773fe3872e66e108ee1346139f694555fce3b34de9b279ced8410ff?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    title: "The Lower Omo Valley",
    description:
      "The Lower Omo Valley in Ethiopia is a captivating tapestry of cultural heritage and natural beauty, where traditional tribes and picturesque landscapes intertwine harmoniously.",
    traveler: {
      name: "Cristina Gottardi",
      role: "Traveler",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46265e41ba782316459252792029e7b6208cbf92d8afeead783108c16516192a?apiKey=7b58294a66e9491ca1b54fe6e6c413c7&",
    },
  },
];

function DestinationSection() {
  return (
    <section className={styles.destinationSection}>
      <h2 className={styles.sectionTitle}>Best Destinations</h2>
      <p className={styles.sectionDescription}>
        Immerse yourself in the captivating landscapes of Ethiopia, ranging from
        awe-inspiring deserts to picturesque landscapes.
      </p>
      <div className={styles.destinationGrid}>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            {...destination}
            cardSize = {index % 4 === 0 || index % 4 === 2 ? "long" : "short"}
          />
        ))}
      </div>
      <Link to="/About">
      <button className={styles.learnMoreButton}>Learn More</button>
      </Link>
    </section>
  );
}

export default DestinationSection;
