import React from 'react';
import styles from '../Header/Header.module.css';

const Section4 = () => {
  return (
    <div style={{ height: '45vh', width: '100%' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div
          style={{
            flex: 1,
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              margin: '1.5rem',
              fontSize: '35px',
              fontWeight: 'bold',
            }}
          >
            Create your custom smart contract today
          </p>
          <div
            style={{
              padding: '20px',
            }}
          >
            <p style={{}}>
              Creating an NFT smart contract should take minutes – not days,
              weeks, or months.
            </p>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            width: '100%',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button className={styles.btn}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
