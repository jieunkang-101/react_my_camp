import React from 'react';
import styles from './Editor.module.css';
import CardEditForm from '../Forms/CardEditForm';
import CardAddForm from '../Forms/CardAddForm';
import { CardsProps } from '../../types/Camping';

const Editor = ({ cards, addCard }: CardsProps) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
    </ul>
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
