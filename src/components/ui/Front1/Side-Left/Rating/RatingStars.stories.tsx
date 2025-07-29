import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RatingStars from './RatingStars';

const meta: Meta<typeof RatingStars> = {
  title: 'Components/ui/Front1/Side-Left/Rating/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RatingStars>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'small' } };
export const Large: Story = { args: { size: 'large' } };
export const CustomColor: Story = { args: { starColor: '#FFD700', textColor: '#009387' } };
export const Partial: Story = { args: { rating: 3.5 } };
export const Empty: Story = { args: { rating: 0 } };
export const TenStars: Story = { args: { max: 10, rating: 7.5, text: '7.5/10' } };
export const NoText: Story = { args: { showText: false } };
export const CustomText: Story = { args: { text: 'Excellent!' } };
export const DarkMode: Story = { args: { darkMode: true } };
export const Interactive: Story = {
  render: (args) => {
    const [rating, setRating] = useState(3);
    return <RatingStars {...args} rating={rating} interactive onRate={setRating} text={`Your rating: ${rating}`} />;
  },
}; 