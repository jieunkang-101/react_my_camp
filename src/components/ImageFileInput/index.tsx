import React, { useRef } from 'react';
import styles from './ImageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('image', event);
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
