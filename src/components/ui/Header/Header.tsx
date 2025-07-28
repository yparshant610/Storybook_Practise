import React from 'react';
import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { ResourceIcon } from './icons/Resources Icon/ResourceIcon';
import { SuccessStoriesIcon } from './icons/SuccessStoriesIcon/SuccessStoriesIcon';
import { CompanyIcon } from './icons/Company/CompanyIcon';
import { PricingIcon } from './icons/Pricing Icon/PricingIcon';
import LoginButton from './login/LoginButton';
import CreateFreeAccountButton from './createFreeAccount/CreateFreeAccountButton';

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.rightSide}>
                    <nav className={styles.nav}>
                        <ResourceIcon />
                        <SuccessStoriesIcon />
                        <CompanyIcon />
                        <PricingIcon />
                    </nav>
                    <div className={styles.actions}>
                        <LoginButton text="Login" />
                        <CreateFreeAccountButton text="Create free account" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header; 