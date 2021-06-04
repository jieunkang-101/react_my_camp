import React, { useRef } from 'react';
import styles from './CardEditForm.module.css';
import Button from '../../Button';
import { CardEditFormProps, FileProps } from '../../../types/Camping';

const CardEditForm = ({
  FileInput,
  card,
  updateCard,
  deleteCard,
}: CardEditFormProps) => {
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
  } = card;

  const onFileChange = (file: FileProps) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event: React.FormEvent): void => {
    // const onChange = (event: React.SyntheticEvent): void => {
    let target = event.currentTarget as HTMLInputElement;
    if (target == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [target.name]: target.value,
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
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
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
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
