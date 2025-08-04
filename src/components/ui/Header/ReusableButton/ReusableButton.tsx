import React from 'react';
import styles from './ReusableButton.module.css';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export interface ReusableButtonProps {
  /** The text to display on the button */
  text?: string;
  /** Size of the button */
  size?: ButtonSize;
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  /** Custom background color (overrides variant colors) */
  backgroundColor?: string;
  /** Custom text color (overrides variant colors) */
  textColor?: string;
  /** Custom border color (overrides variant colors) */
  borderColor?: string;
  /** Custom hover background color */
  hoverBackgroundColor?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Icon to display in the button */
  icon?: React.ReactNode;
  /** Position of the icon relative to text */
  iconPosition?: 'left' | 'right';
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  text = 'Button',
  size = 'medium',
  variant = 'primary',
  backgroundColor,
  textColor,
  borderColor,
  hoverBackgroundColor,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  style,
  type = 'button',
  ariaLabel,
}) => {
  const classNames = [
    styles.button,
    styles[size],
    styles[variant],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  // Create custom styles for color overrides
  const customStyles: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(borderColor && { borderColor }),
  };

  // Add CSS custom properties for hover effects
  const cssCustomProperties = {
    ...(hoverBackgroundColor && { '--hover-bg-color': hoverBackgroundColor }),
  } as React.CSSProperties;

  return (
    <button 
      className={classNames} 
      onClick={handleClick} 
      disabled={disabled || loading}
      type={type}
      style={{ ...customStyles, ...cssCustomProperties }}
      aria-label={ariaLabel || text}
      aria-disabled={disabled || loading}
    >
      {loading && <span className={styles.spinner} />}
      {icon && iconPosition === 'left' && !loading && (
        <span className={styles.icon}>{icon}</span>
      )}
      {text && <span className={styles.text}>{text}</span>}
      {icon && iconPosition === 'right' && !loading && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default ReusableButton;
