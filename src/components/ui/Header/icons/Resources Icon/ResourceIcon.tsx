import React, { useState } from 'react';
import styles from './ResourceIcon.module.css';

const ArrowDownIcon = () => (
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
            stroke="#222222"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const ResourceIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.resourceContainer} onClick={toggleDropdown}>
            <span>Resources</span>
            <ArrowDownIcon />
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {/* Add your dropdown menu items here */}
                    <a href="#">Resource 1</a>
                    <a href="#">Resource 2</a>
                    <a href="#">Resource 3</a>
                </div>
            )}
        </div>
    );
};

export default ResourceIcon; 