import React from 'react';
import styles from './SuccessStoriesIcon.module.css';

export type SuccessStoriesIconSize = 'small' | 'medium' | 'large';

export interface SuccessStoriesIconProps {
    size?: SuccessStoriesIconSize;
    color?: string;
    disabled?: boolean;
    className?: string;
}

export const SuccessStoriesIcon: React.FC<SuccessStoriesIconProps> = ({
    size = 'medium',
    color,
    disabled = false,
    className = '',
}) => {
    return (
        <div
            className={[
                styles.successStoriesContainer,
                styles[size],
                disabled ? styles.disabled : '',
                className,
            ].join(' ')}
            style={color ? { color } : {}}
            aria-disabled={disabled}
        >
            <span>Success stories</span>
        </div>
    );
};

export default SuccessStoriesIcon; 