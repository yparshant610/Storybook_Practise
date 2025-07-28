import React from 'react';
import styles from './RatingStars.module.css';
import star from './Star.png';

interface RatingStarsProps {
    rating?: number;
    text?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ 
    rating = 5.0,
    text = "5.0 Shopify Rating"
}) => {
    const stars = Array(5).fill(null);

    return (
        <div className={styles.ratingContainer}>
            <div className={styles.starsContainer}>
                {stars.map((_, index) => (
                    <div key={index} className={styles.starWrapper}>
                        <img src={star} alt="Star" className={styles.star} />
                    </div>
                ))}
            </div>
            <div className={styles.ratingText}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default RatingStars; 