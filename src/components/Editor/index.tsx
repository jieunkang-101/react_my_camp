import React from 'react';
import styles from './Editor.module.css';
import CardEditForm from '../Forms/CardEditForm';
import CardAddForm from '../Forms/CardAddForm';
import { EditorProps } from '../../types/Camping';

const Editor = ({
  FileInput,
  cards,
  addCard,
  updateCard,
  deleteCard,
}: EditorProps) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
