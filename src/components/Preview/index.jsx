import React from 'react';
import styles from './Preview.module.css';
import Card from '../Card';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  </section>
);

export default Preview;
