import React, { useRef } from 'react';
import styles from './ImageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) inputRef.current.click();
  };

  const onChange = async (event: React.ChangeEvent) => {
    let target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    const uploaded = await imageUploader.upload(file);
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
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
