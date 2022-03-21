import React from 'react';
import styles from './TrustedPartners.module.css';
const TrustedPartners = () => {
  return (
    <div className={styles.container}>
      <h4>Trusted Partners</h4>
      <img
        className={styles.img}
        src='./images/trusted-partners-2048x135.png'
        alt=''
      />
    </div>
  );
};

export default TrustedPartners;
