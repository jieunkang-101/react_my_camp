import React, { useRef } from 'react';
import styles from './CardEditForm.module.css';
import ImageFileInput from '../../ImageFileInput';
import Button from '../../Button';
import { CardEditFormProps } from '../../../types/Camping';

const CardEditForm = ({ card, updateCard, deleteCard }: CardEditFormProps) => {
  // const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const siteRef = useRef<HTMLInputElement>(null);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const websiteURLRef = useRef<HTMLInputElement>(null);
  const activitiesRef = useRef<HTMLTextAreaElement>(null);
  const placeVisitedRef = useRef<HTMLTextAreaElement>(null);

  const {
    name,
    theme,
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

  const onChange = (event: any) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    console.log(event.currentTarget.name);
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={locationRef}
        className={styles.input}
        type="text"
        name="location"
        value={location}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>

      <input
        ref={siteRef}
        className={styles.input}
        type="text"
        name="site"
        value={site}
        onChange={onChange}
      />
      <input
        ref={checkInRef}
        className={styles.input}
        type="text"
        name="checkIn"
        value={checkIn}
        onChange={onChange}
      />
      <input
        ref={checkOutRef}
        className={styles.input}
        type="text"
        name="checkOut"
        value={checkOut}
        onChange={onChange}
      />
      <input
        ref={websiteURLRef}
        className={styles.input}
        type="text"
        name="websiteURL"
        value={websiteURL}
        onChange={onChange}
      />
      <textarea
        ref={placeVisitedRef}
        className={styles.textarea}
        name="placeVisited"
        value={placeVisited}
        onChange={onChange}
      />
      <textarea
        ref={activitiesRef}
        className={styles.textarea}
        name="activities"
        value={activities}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
