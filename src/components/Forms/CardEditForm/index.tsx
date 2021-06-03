import React from 'react';
import styles from './CardEditForm.module.css';
import ImageFileInput from '../../ImageFileInput';
import Button from '../../Button';
import { CardProps } from '../../../types/Camping';

const CardEditForm = ({ card }: CardProps) => {
  const {
    theme,
    name,
    location,
    websiteURL,
    site,
    checkIn,
    checkOut,
    activities,
    placeVisited,
    fileName,
    fileURL,
  } = card;
  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="location"
        value={location}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>

      <input className={styles.input} type="text" name="site" value={site} />
      <input
        className={styles.input}
        type="text"
        name="checkIn"
        value={checkIn}
      />
      <input
        className={styles.input}
        type="text"
        name="checkOut"
        value={checkOut}
      />
      <input
        className={styles.input}
        type="text"
        name="websiteURL"
        value={websiteURL}
      />
      <textarea
        className={styles.textarea}
        name="placeVisited"
        value={placeVisited}
      />
      <textarea
        className={styles.textarea}
        name="activities"
        value={activities}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
