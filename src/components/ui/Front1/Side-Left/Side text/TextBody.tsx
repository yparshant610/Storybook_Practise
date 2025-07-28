import React from 'react';
import styles from './TextBody.module.css';

interface TextBodyProps {
    text?: string;
}

export const TextBody: React.FC<TextBodyProps> = ({
    text = "Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce."
}) => {
    return (
        <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default TextBody; 