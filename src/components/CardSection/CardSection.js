import React from 'react';
import styles from './CardSection.module.css';

const CardSection = ({ data }) => {
  const { title, description, image, button, reverse } = data;

  const flexReverse = reverse ? 'row-reverse' : 'row';

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          flexDirection: flexReverse,
        }}
      >
        {/* left */}
        <div className={styles.left}>
          <div className={styles.leftContainer}>
            <h1>{title}</h1>

            <p className={styles.p}>{description}</p>
            <button className={styles.btn}>{button}</button>
          </div>
        </div>

        {/* right */}
        <div className={styles.right}>
          <img className={styles.img} src={image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
