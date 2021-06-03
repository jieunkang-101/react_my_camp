import React, { useRef } from 'react';
import styles from './CardAddForm.module.css';
// import ImageFileInput from '../../ImageFileInput';
import Button from '../../Button';
import { Camping, CardAddFormProps } from '../../../types/Camping';
import { v1 as uuidV1 } from 'uuid';

const CardAddForm = ({ FileInput, onAdd }: CardAddFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const siteRef = useRef<HTMLInputElement>(null);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const websiteURLRef = useRef<HTMLInputElement>(null);
  const activitiesRef = useRef<HTMLTextAreaElement>(null);
  const placeVisitedRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const card: Camping = {
      id: uuidV1(),
      name: nameRef.current ? nameRef.current.value : '',
      theme: themeRef.current ? themeRef.current.value : '',
      location: locationRef.current ? locationRef.current.value : '',
      websiteURL: websiteURLRef.current ? websiteURLRef.current.value : '',
      site: siteRef.current ? siteRef.current.value : '',
      checkIn: checkInRef.current ? checkInRef.current.value : '',
      checkOut: checkOutRef.current ? checkOutRef.current.value : '',
      activities: activitiesRef.current ? activitiesRef.current.value : '',
      placeVisited: placeVisitedRef.current
        ? placeVisitedRef.current.value
        : '',
      fileName: '',
      fileURL: '',
    };
    if (formRef.current) formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={locationRef}
        className={styles.input}
        type="text"
        name="location"
        placeholder="location"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>

      <input
        ref={siteRef}
        className={styles.input}
        type="text"
        name="site"
        placeholder="site"
      />
      <input
        ref={checkInRef}
        className={styles.input}
        type="text"
        name="checkIn"
        placeholder="check-in date"
      />
      <input
        ref={checkOutRef}
        className={styles.input}
        type="text"
        name="checkOut"
        placeholder="check-out date"
      />
      <input
        ref={websiteURLRef}
        className={styles.input}
        type="text"
        name="websiteURL"
        placeholder="website URL"
      />
      <textarea
        ref={placeVisitedRef}
        className={styles.textarea}
        name="placeVisited"
        placeholder="place visited"
      />
      <textarea
        ref={activitiesRef}
        className={styles.textarea}
        name="activities"
        placeholder="activities"
      />
      <div className={styles.fileInput}>
        <FileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
