import React from 'react';
import styles from './TextMain.module.css';

interface TextMainProps {
    text?: string;
}

export const TextMain: React.FC<TextMainProps> = () => {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.text}>
                Meet your<br />
                <span className={styles.highlight}>favorite</span> new (old) marketing channel.
            </h2>
        </div>
    );
};

export default TextMain; 