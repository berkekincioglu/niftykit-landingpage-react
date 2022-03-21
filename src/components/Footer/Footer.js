import React from 'react';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div style={{ width: '100%', height: '40vh', backgroundColor: '#18151a' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Icons */}
        <div
          style={{
            width: '15%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <FaDiscord style={{ color: '#fff', height: '24px', width: '24px' }} />
          <FaYoutube style={{ color: '#fff', height: '24px', width: '24px' }} />
          <FaInstagram
            style={{ color: '#fff', height: '24px', width: '24px' }}
          />
          <FaTwitter style={{ color: '#fff', height: '24px', width: '24px' }} />
        </div>

        <div
          style={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <a className={`${styles.link}  ${styles.active}`} href=''>
            Home
          </a>
          <a className={styles.link} href=''>
            Terms of Use
          </a>
          <a className={styles.link} href=''>
            Privacy Notice
          </a>
          <a className={styles.link} href=''>
            FAQ
          </a>
          <a className={styles.link} href=''>
            Blog
          </a>
          <a className={styles.link} href=''>
            Jobs
          </a>
          <a className={styles.link} href=''>
            Login
          </a>
          <a className={styles.link} href=''>
            Sign up
          </a>
        </div>

        {/* text */}
        <div>
          <p style={{ color: '#fff' }}>
            Copyright © NIFTYKIT, INC. 2022 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
