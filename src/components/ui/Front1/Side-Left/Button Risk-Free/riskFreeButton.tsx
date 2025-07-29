import React from 'react';
import styles from './riskFreeButton.module.css';

export type RiskFreeButtonSize = 'small' | 'medium' | 'large';
export type RiskFreeButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export interface RiskFreeButtonProps {
  text?: string;
  size?: RiskFreeButtonSize;
  variant?: RiskFreeButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  darkMode?: boolean;
}

const RiskFreeButton: React.FC<RiskFreeButtonProps> = ({
  text = 'Try it Risk-free',
  size = 'medium',
  variant = 'primary',
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  darkMode = false,
}) => {
  const classNames = [
    styles.button,
    styles[size],
    styles[variant],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    fullWidth ? styles.fullWidth : '',
    darkMode ? styles.dark : '',
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

export default RiskFreeButton; 