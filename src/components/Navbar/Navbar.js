import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logoContainer}>
          <img
            src='./images/nk-logo-media.png'
            alt=''
            style={{ width: '50px', height: '50px', marginRight: '20px' }}
          />
          <h2>Nft Web</h2>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink} style={{ position: 'relative' }}>
            DropKit
            <p
              style={{
                position: 'absolute',
                bottom: 10,
                right: -27,
                fontSize: '12px',
              }}
            >
              beta
            </p>
          </li>

          <li className={styles.navLink}>FAQ</li>
          <li className={styles.navLink}>Blog</li>
          <li className={styles.navLink}>Discord</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div>
          <a href='' className={styles.navLink}>
            Login
          </a>
          <a href='' className={styles.signUp}>
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
