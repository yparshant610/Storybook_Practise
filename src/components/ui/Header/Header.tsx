import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import { Logo as DefaultLogo } from './Logo/Logo';
import { ResourceIcon } from './icons/Resources Icon/ResourceIcon';
import { SuccessStoriesIcon } from './icons/SuccessStoriesIcon/SuccessStoriesIcon';
import { CompanyIcon } from './icons/Company/CompanyIcon';
import { PricingIcon } from './icons/Pricing Icon/PricingIcon';
import LoginButton from './login/LoginButton';
import CreateFreeAccountButton from './createFreeAccount/CreateFreeAccountButton';

export interface HeaderProps {
  loginDisabled?: boolean;
  createAccountDisabled?: boolean;
  loginLoading?: boolean;
  createAccountLoading?: boolean;
  hideLogin?: boolean;
  hideCreateAccount?: boolean;
  navItems?: ReactNode;
  logo?: ReactNode;
  actions?: ReactNode;
  darkMode?: boolean;
  mobile?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  loginDisabled = false,
  createAccountDisabled = false,
  loginLoading = false,
  createAccountLoading = false,
  hideLogin = false,
  hideCreateAccount = false,
  navItems,
  logo,
  actions,
  darkMode = false,
  mobile = false,
  style,
  className = '',
}) => {
  return (
    <div
      className={[
        styles.headerContainer,
        darkMode ? styles.dark : '',
        mobile ? styles.mobile : '',
        className,
      ].join(' ')}
      style={style}
    >
      <header className={styles.header}>
        <div className={styles.logoContainer}>{logo || <DefaultLogo />}</div>
        <div className={styles.rightSide}>
          <nav className={styles.nav}>
            {navItems || (
              <>
                <ResourceIcon />
                <SuccessStoriesIcon />
                <CompanyIcon />
                <PricingIcon />
              </>
            )}
          </nav>
          <div className={styles.actions}>
            {!hideLogin && (
              <LoginButton text="Login" disabled={loginDisabled} loading={loginLoading} />
            )}
            {!hideCreateAccount && (
              <CreateFreeAccountButton text="Create free account" disabled={createAccountDisabled} loading={createAccountLoading} />
            )}
            {actions}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 