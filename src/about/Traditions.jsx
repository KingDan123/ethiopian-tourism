
import React from 'react';
import styles from './Traditions.module.css';

function Traditions() {
  const traditions = [
    {
      title: 'Language',
      description: 'Amharic is the official language of Ethiopia and the primary medium of communication. English is widely spoken as a second language, alongside over 85 other languages such as Oromo, Tigrinya, Somali, and Afar, reflecting the rich linguistic diversity that characterizes the Ethiopian society. Bilingual signage in Amharic and English is prevalent, ensuring accessibility and inclusivity across the nations multilingual landscape.',
      image: '../img/konso_village.jpg'
    },
    {
      title: 'Culture',
      description: 'Ethiopias vibrant heritage and traditions are deeply rooted in its historical significance as an ancient crossroads of cultures and a land of diverse religious heritage. In modern times, the country has experienced a notable cultural evolution, blending age-old customs with the demands of a rapidly changing global landscape.',
      image: '../img/ertale_marse_place.jpg'
    }
  ];

  return (
    <section className={styles.traditions}>
      <h2 className={styles.sectionTitle}>Traditions of Ethiopia</h2>
      {traditions.map((tradition, index) => (
        <article key={index} className={styles.traditionItem}>
          <img src={tradition.image} alt={`Illustration of ${tradition.title}`} className={styles.traditionImage} />
          <div className={styles.traditionContent}>
            <h3 className={styles.traditionTitle}>{tradition.title}</h3>
            <p className={styles.traditionDescription}>{tradition.description}</p>
            <div className={styles.circleIcon} aria-hidden="true" />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Traditions;