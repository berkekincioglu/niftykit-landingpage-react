import React from 'react';
import styles from './Section3.module.css';
const Section3 = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '40vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src='./images/Rectangle-46.png'
        alt=''
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: '0.2',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // backgroundColor: 'red',
          width: '100%',
          height: '100%',
          zIndex: '10',
        }}
      >
        <h2 style={{}}>
          We’ve implemented and adhered to open and decentralized standards
        </h2>
        {/* Image Section */}
        <div
          style={{
            height: '20vh',
            width: '70%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '20%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //   margin: '0 5%',
            }}
          >
            <img
              src='./images/ipfs-logo.png'
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              alt=''
            />
          </div>
          <div
            style={{
              height: '100%',
              width: '20%',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //   margin: '0 5%',
            }}
          >
            <img
              src='./images/metamask-logo.png'
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              alt=''
            />
          </div>
          <div
            style={{
              height: '100%',
              width: '20%',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //   margin: '0 5%',
            }}
          >
            <img
              src='./images/ethereum-logo.png'
              style={{ width: '50%', height: '50%', objectFit: 'contain' }}
              alt=''
            />
          </div>
          <div
            style={{
              height: '100%',
              width: '20%',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              //   margin: '0 5%',
            }}
          >
            <img
              src='./images/openzeppelin-logo.png'
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
