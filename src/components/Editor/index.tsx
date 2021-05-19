import React from 'react';
import styles from './Editor.module.css';
import CardEditForm from '../CardEditForm';
import { CardsProps } from '../../types/Camping';

const Editor = ({ cards }: CardsProps) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
    </ul>
  </section>
);

export default Editor;
