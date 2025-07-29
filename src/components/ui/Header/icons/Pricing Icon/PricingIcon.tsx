import React from 'react';
import styles from './PricingIcon.module.css';

export type PricingIconSize = 'small' | 'medium' | 'large';

export interface PricingIconProps {
    size?: PricingIconSize;
    color?: string;
    disabled?: boolean;
    className?: string;
}

export const PricingIcon: React.FC<PricingIconProps> = ({
    size = 'medium',
    color,
    disabled = false,
    className = '',
}) => {
    return (
        <div
            className={[
                styles.pricingContainer,
                styles[size],
                disabled ? styles.disabled : '',
                className,
            ].join(' ')}
            style={color ? { color } : {}}
            aria-disabled={disabled}
        >
            <span>Pricing</span>
        </div>
    );
};

export default PricingIcon; 