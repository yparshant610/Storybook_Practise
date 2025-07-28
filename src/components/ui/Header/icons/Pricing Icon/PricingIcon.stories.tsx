import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { PricingIcon } from './PricingIcon';

const meta: Meta<typeof PricingIcon> = {
    title: 'Components/ui/Header/icons/Pricing Icon/PricingIcon',
    component: PricingIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
}; 