import React, { useState, useRef } from 'react';
import styles from './CardAddForm.module.css';
import ImageFileInput from '../../ImageFileInput';
import Button from '../../Button';
import { Camping } from '../../../types/Camping';

// interface CardAddFormValues {
//   name: string;
// }

const CardAddForm = ({ onAdd }: any) => {
  // const formRef = useRef<HTMLFormElement>(null);
  // const nameRef = useRef(null);
  // const locationRef = useRef<HTMLInputElement>(null);
  // const themeRef = useRef<HTMLSelectElement>(null);
  // const siteRef = useRef<HTMLInputElement>(null);
  // const checkInRef = useRef<HTMLInputElement>(null);
  // const checkOutRef = useRef<HTMLInputElement>(null);
  // const websiteURLRef = useRef<HTMLInputElement>(null);
  // const activitiesRef = useRef<HTMLTextAreaElement>(null);
  // const placeVisitedRef = useRef<HTMLTextAreaElement>(null);
  const [card, setCard] = useState<Camping>({
    id: '',
    theme: '',
    name: '',
    location: '',
    websiteURL: '',
    site: '',
    checkIn: '',
    checkOut: '',
    activities: '',
    placeVisited: '',
    fileName: '',
    fileURL: '',
  });
  const handleChange = (key: string, value: any) => {
    setCard((current) => ({
      ...current,
      [key]: value,
    }));
  };
  console.log(card);

  const onSubmit = (event: any) => {
    // console.log('submit:', event);
    event.preventDefault();
  };
  return (
    <form className={styles.form}>
      <input
        // ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
        // value={card.name}
        onChange={(value) => console.log(value)}
        // onChange={(value) => handleChange('name', value)}
      />
      <input
        // // ref={locationRef}
        className={styles.input}
        type="text"
        name="location"
        placeholder="location"
      />
      <select
        // // ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>

      <input
        // // ref={siteRef}
        className={styles.input}
        type="text"
        name="site"
        placeholder="site"
      />
      <input
        // // ref={checkInRef}
        className={styles.input}
        type="text"
        name="checkIn"
        placeholder="check-in date"
      />
      <input
        // // ref={checkOutRef}
        className={styles.input}
        type="text"
        name="checkOut"
        placeholder="check-out date"
      />
      <input
        // // ref={websiteURLRef}
        className={styles.input}
        type="text"
        name="websiteURL"
        placeholder="website URL"
      />
      <textarea
        // // ref={placeVisitedRef}
        className={styles.textarea}
        name="placeVisited"
        placeholder="place visited"
      />
      <textarea
        // // ref={activitiesRef}
        className={styles.textarea}
        name="activities"
        placeholder="activities"
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
