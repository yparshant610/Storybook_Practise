import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RatingStars } from './RatingStars';

const meta: Meta<typeof RatingStars> = {
    title: 'Components/ui/Front1/side-left/Rating/RatingStars',
    component: RatingStars,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RatingStars>;

export const Default: Story = {
    args: {
        rating: 5.0,
        text: '5.0 Shopify Rating',
    },
};

export const CustomRating: Story = {
    args: {
        rating: 4.5,
        text: '4.5 Customer Rating',
    },
}; 