import React from 'react';
import styles from './Logo.module.css';
import logo from './logo.png';

export const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt="Postpilot Logo" />
        </div>
    );
};

export default Logo; 