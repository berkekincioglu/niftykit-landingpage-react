import React from 'react';
import styles from './Card.module.css';
const Card2 = ({ data }) => {
  const { image, h1, p } = data;
  return (
    <div
      style={{
        width: '25%',
        height: '30vh',
        boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '20px',
        marginTop: '5%',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          width: '80%',
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={image}
          alt=''
          style={{
            width: '30%',

            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>{h1}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default Card2;
