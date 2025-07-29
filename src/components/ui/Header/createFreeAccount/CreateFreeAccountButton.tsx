import React from 'react';
import styles from './CreateFreeAccountButton.module.css';

export type CreateFreeAccountButtonSize = 'small' | 'medium' | 'large';
export type CreateFreeAccountButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export interface CreateFreeAccountButtonProps {
  text?: string;
  size?: CreateFreeAccountButtonSize;
  variant?: CreateFreeAccountButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const CreateFreeAccountButton: React.FC<CreateFreeAccountButtonProps> = ({
  text = 'Create free account',
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

export default CreateFreeAccountButton; 