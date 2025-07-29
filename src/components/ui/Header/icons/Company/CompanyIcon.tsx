import React, { useState } from 'react';
import styles from './CompanyIcon.module.css';

export type CompanyIconSize = 'small' | 'medium' | 'large';

export interface CompanyIconProps {
    size?: CompanyIconSize;
    color?: string;
    disabled?: boolean;
    className?: string;
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

export const CompanyIcon: React.FC<CompanyIconProps> = ({
    size = 'medium',
    color,
    disabled = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    return (
        <div
            className={[
                styles.companyContainer,
                styles[size],
                disabled ? styles.disabled : '',
                className,
            ].join(' ')}
            onClick={toggleDropdown}
            style={color ? { color } : {}}
        >
            <span>Company</span>
            <ArrowDownIcon color={color} />
            {isOpen && !disabled && (
                <div className={styles.dropdownMenu}>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Press</a>
                </div>
            )}
        </div>
    );
};

export default CompanyIcon; 