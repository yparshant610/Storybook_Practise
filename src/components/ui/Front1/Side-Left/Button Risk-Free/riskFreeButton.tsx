import React from 'react';
import styles from './riskFreeButton.module.css';

interface RiskFreeButtonProps {
    text?: string;
    onClick?: () => void;
}

export const RiskFreeButton: React.FC<RiskFreeButtonProps> = ({
    text = "Try it Risk-free",
    onClick
}) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
        >
            <span className={styles.text}>{text}</span>
        </button>
    );
};

export default RiskFreeButton; 