import React from 'react';
import styles from './Card.module.css';
const Card = ({ data }) => {
  const { image, title, description } = data;

  return (
    <div className={styles.card}>
      <div
        style={{
          width: '32%',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img className={styles.img} src={image} alt='' />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2 className={styles.h2}>{title}</h2>
        <p style={{ marginTop: '20px' }} className={styles.h2}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
