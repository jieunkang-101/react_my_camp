import React, { useState, useRef } from 'react';
import styles from './ImageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }: any) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) inputRef.current.click();
  };

  const onChange = async (event: React.ChangeEvent) => {
    setLoading(true);
    let target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    const uploaded = await imageUploader.upload(file);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
