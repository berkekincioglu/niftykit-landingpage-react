import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <img
            className={styles.logoImg}
            src='./images/nk-logo-media.png'
            alt=''
            style={{ width: '60px', height: '60px' }}
          />
          <h1 className={styles.h1}>
            NiftyKit: The No-Code Solution For NFT Smart Contracts
            {/* <br /> */}
          </h1>
          <h3 className={styles.h3}>
            Easily create, manage and sell NFTs on your own custom ERC-721 smart
            contracts.
          </h3>
          <button className={styles.btn}> GET STARTED NOW</button>
        </div>
      </div>

      {/* right */}
      <div className={styles.right} style={{ flex: 1 }}>
        <img
          className={styles.rightImg}
          src='./images/dropkit-draft-2048x1856.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
