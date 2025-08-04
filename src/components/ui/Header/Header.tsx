import React, { ReactNode } from 'react';
import styles from './Header.module.css';
import { Logo as DefaultLogo } from './Logo/Logo';
import { ReusableIcon } from './icons/ReusableIcon/ReusableIcon';
import ReusableButton from './ReusableButton/ReusableButton';

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
  // Button customization props
  loginButtonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  createAccountButtonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  loginButtonColor?: string;
  createAccountButtonColor?: string;
  loginButtonTextColor?: string;
  createAccountButtonTextColor?: string;
  loginButtonBorderColor?: string;
  createAccountButtonBorderColor?: string;
  // Icon customization props
  iconSize?: 'small' | 'medium' | 'large';
  iconColor?: string;
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
  // Button customization props
  loginButtonVariant = 'outline',
  createAccountButtonVariant = 'primary',
  loginButtonColor,
  createAccountButtonColor,
  loginButtonTextColor,
  createAccountButtonTextColor,
  loginButtonBorderColor,
  createAccountButtonBorderColor,
  // Icon customization props
  iconSize = 'medium',
  iconColor,
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
                <ReusableIcon 
                  label="Resources" 
                  type="dropdown" 
                  size={iconSize}
                  color={iconColor}
                  dropdownItems={[
                    { label: 'Documentation', href: '#docs' },
                    { label: 'API Reference', href: '#api' },
                    { label: 'Tutorials', href: '#tutorials' },
                    { label: 'Community', href: '#community' }
                  ]}
                />
                <ReusableIcon 
                  label="Success Stories" 
                  type="dropdown" 
                  size={iconSize}
                  color={iconColor}
                  dropdownItems={[
                    { label: 'Case Studies', href: '#case-studies' },
                    { label: 'Customer Reviews', href: '#reviews' },
                    { label: 'Testimonials', href: '#testimonials' }
                  ]}
                />
                <ReusableIcon 
                  label="Company" 
                  type="dropdown" 
                  size={iconSize}
                  color={iconColor}
                  dropdownItems={[
                    { label: 'About Us', href: '#about' },
                    { label: 'Careers', href: '#careers' },
                    { label: 'Press', href: '#press' },
                    { label: 'Contact', href: '#contact' }
                  ]}
                />
                <ReusableIcon 
                  label="Pricing" 
                  type="simple" 
                  size={iconSize}
                  color={iconColor}
                  onClick={() => console.log('Pricing clicked!')}
                />
              </>
            )}
          </nav>
          <div className={styles.actions}>
            {!hideLogin && (
              <ReusableButton 
                text="Login" 
                variant={loginButtonVariant}
                size="medium"
                backgroundColor={loginButtonColor}
                textColor={loginButtonTextColor}
                borderColor={loginButtonBorderColor}
                disabled={loginDisabled}
                loading={loginLoading}
                onClick={() => console.log('Login clicked!')}
              />
            )}
            {!hideCreateAccount && (
              <ReusableButton 
                text="Create free account" 
                variant={createAccountButtonVariant}
                size="medium"
                backgroundColor={createAccountButtonColor}
                textColor={createAccountButtonTextColor}
                borderColor={createAccountButtonBorderColor}
                disabled={createAccountDisabled}
                loading={createAccountLoading}
                onClick={() => console.log('Create account clicked!')}
              />
            )}
            {actions}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 