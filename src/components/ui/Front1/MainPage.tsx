import React from 'react';
import styles from './MainPage.module.css';
import { RatingStars } from './Side-Left/Rating/RatingStars';
import { TextMain } from './Side-Left/Main Text/TextMain';
import { TextBody } from './Side-Left/Side text/TextBody';
import { RiskFreeButton } from './Side-Left/Button Risk-Free/riskFreeButton';
import { SideRightView } from './Side-Right/sideRightView';

export const MainPage: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftSide}>
                <div className={styles.content}>
                    <div>
                        <TextMain />
                    </div>
                    <div>
                        <TextBody />
                    </div>
                    <div className={styles.buttonRatingContainer}>
                        <RiskFreeButton />
                        <RatingStars />
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <SideRightView />
            </div>
        </div>
    );
};

export default MainPage; 