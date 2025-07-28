import React from 'react';
import styles from './sideRightView.module.css';
import divImage from './div.png';

interface SideRightViewProps {
    alt?: string;
}

export const SideRightView: React.FC<SideRightViewProps> = ({
    alt = "Side right view"
}) => {
    return (
        <div className={styles.container}>
            <img 
                src={divImage} 
                alt={alt} 
                className={styles.image}
            />
        </div>
    );
};

export default SideRightView; 