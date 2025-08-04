import React, { useState } from 'react';
import styles from './ReusableIcon.module.css';

export type IconSize = 'small' | 'medium' | 'large';
export type IconType = 'simple' | 'dropdown';

export interface DropdownItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

export interface ReusableIconProps {
    /** The display text for the icon */
    label: string;
    /** Size of the icon */
    size?: IconSize;
    /** Color of the icon */
    color?: string;
    /** Whether the icon is disabled */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Type of icon - simple or dropdown */
    type?: IconType;
    /** Dropdown items (only used when type is 'dropdown') */
    dropdownItems?: DropdownItem[];
    /** Click handler for simple icons */
    onClick?: () => void;
    /** Custom styles */
    style?: React.CSSProperties;
}

const ArrowDownIcon = ({ color }: { color?: string }) => (
    <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowIcon}
    >
        <path
            d="M1 1L5 5L9 1"
            stroke={color || "#222222"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const ReusableIcon: React.FC<ReusableIconProps> = ({
    label,
    size = 'medium',
    color,
    disabled = false,
    className = '',
    type = 'simple',
    dropdownItems = [],
    onClick,
    style,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (disabled) return;
        
        if (type === 'dropdown') {
            setIsOpen(!isOpen);
        } else if (onClick) {
            onClick();
        }
    };

    const handleDropdownItemClick = (item: DropdownItem) => {
        if (item.onClick) {
            item.onClick();
        }
        setIsOpen(false);
    };

    return (
        <div
            className={[
                styles.iconContainer,
                styles[size],
                disabled ? styles.disabled : '',
                type === 'dropdown' ? styles.dropdown : styles.simple,
                className,
            ].join(' ')}
            onClick={handleClick}
            style={{ ...style, ...(color ? { color } : {}) }}
            aria-disabled={disabled}
            role={type === 'dropdown' ? 'button' : 'button'}
            aria-expanded={type === 'dropdown' ? isOpen : undefined}
        >
            <span className={styles.label}>{label}</span>
            {type === 'dropdown' && <ArrowDownIcon color={color} />}
            
            {type === 'dropdown' && isOpen && !disabled && (
                <div className={styles.dropdownMenu}>
                    {dropdownItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href || '#'}
                            onClick={(e) => {
                                if (item.onClick) {
                                    e.preventDefault();
                                    handleDropdownItemClick(item);
                                }
                            }}
                            className={styles.dropdownItem}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReusableIcon;
