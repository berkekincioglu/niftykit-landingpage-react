import React from 'react';
import dummyData from '../../data/dummyData';

import styles from './MintNftSection.module.css';

const MintNftSection = ({ sectionData, Card, cardData, bgColor }) => {
  const { h1, p } = sectionData;
  return (
    <div
      style={{
        width: '100%',
        height: '65vh',
        backgroundColor: bgColor,
        marginBottom: '20px',
      }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}> {h1}</h1>
          <p>{p}</p>
          <div className={styles.cardContainer}>
            {cardData.map((item, index) => {
              return <Card key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNftSection;
