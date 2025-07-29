import React from 'react';
import styles from './RatingStars.module.css';
import star from './Star.png';

export type RatingStarsSize = 'small' | 'medium' | 'large';

export interface RatingStarsProps {
    rating?: number;
    max?: number;
    text?: string;
    size?: RatingStarsSize;
    starColor?: string;
    textColor?: string;
    showText?: boolean;
    interactive?: boolean;
    onRate?: (rating: number) => void;
    darkMode?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
    rating = 5.0,
    max = 5,
    text = '',
    size = 'medium',
    starColor,
    textColor,
    showText = true,
    interactive = false,
    onRate,
    darkMode = false,
}) => {
    const stars = Array.from({ length: max });
    const displayText = text || `${rating} / ${max}`;

    return (
        <div className={[styles.ratingContainer, styles[size], darkMode ? styles.dark : ''].join(' ')}>
            <div className={styles.starsContainer}>
                {stars.map((_, index) => {
                    const filled = rating >= index + 1;
                    const half = !filled && rating > index && rating < index + 1;
                    return (
                        <span
                            key={index}
                            className={styles.starWrapper}
                            style={interactive ? { cursor: 'pointer' } : {}}
                            onClick={interactive && onRate ? () => onRate(index + 1) : undefined}
                        >
                            <img
                                src={star}
                                alt="Star"
                                className={styles.star}
                                style={{
                                    filter: filled
                                        ? starColor
                                            ? `drop-shadow(0 0 0 ${starColor})` : ''
                                        : half
                                            ? 'grayscale(50%)' : 'grayscale(100%)',
                                    opacity: filled || half ? 1 : 0.4,
                                    width: size === 'small' ? 16 : size === 'large' ? 32 : 24,
                                    height: size === 'small' ? 16 : size === 'large' ? 32 : 24,
                                }}
                            />
                        </span>
                    );
                })}
            </div>
            {showText && (
                <div className={styles.ratingText} style={textColor ? { color: textColor } : {}}>
                    <p>{displayText}</p>
                </div>
            )}
        </div>
    );
};

export default RatingStars; 