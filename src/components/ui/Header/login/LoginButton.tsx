import React from 'react';
import styles from './LoginButton.module.css';

export type LoginButtonSize = 'small' | 'medium' | 'large';
export type LoginButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export interface LoginButtonProps {
  text?: string;
  size?: LoginButtonSize;
  variant?: LoginButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  text = 'Login',
  size = 'medium',
  variant = 'primary',
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}) => {
  const classNames = [
    styles.button,
    styles[size],
    styles[variant],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    fullWidth ? styles.fullWidth : '',
  ].join(' ');

  return (
    <button className={classNames} onClick={onClick} disabled={disabled || loading}>
      {loading && <span className={styles.spinner} />}
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default LoginButton; 