import React, { memo } from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../types/Camping';

const DEFAULT_IMAGE = '/images/camping_stamp.png';

const Card = memo(({ card }: CardProps) => {
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
    fileURL,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.photo} src={url} alt="default" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.location}>{location}</p>
        <p className={styles.websiteURL}>
          <a href={websiteURL} target="blank">
            Website
          </a>
        </p>
        <p className={styles.site}>Site: {site}</p>
        <p className={styles.checkIn}>Check-in: {checkIn}</p>
        <p className={styles.checkOut}>Check-out: {checkOut}</p>
        <p className={styles.placeVisited}>Palce Visitied: {placeVisited}</p>
        <p className={styles.activities}>Activities: {activities}</p>
      </div>
    </li>
  );
});

function getStyles(theme: string) {
  switch (theme) {
    case 'Dark':
      return styles.dark;
    case 'Light':
      return styles.light;
    case 'Colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
