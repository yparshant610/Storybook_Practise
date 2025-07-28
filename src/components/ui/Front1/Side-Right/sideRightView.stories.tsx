import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SideRightView } from './sideRightView';

const meta: Meta<typeof SideRightView> = {
    title: 'Components/ui/Front1/Side-Right/SideRightView',
    component: SideRightView,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SideRightView>;

export const Default: Story = {
    args: {
        alt: "Side right view"
    },
};

// Custom size story to demonstrate responsive behavior
export const CustomSize: Story = {
    args: {
        alt: "Side right view"
    },
    parameters: {
        viewport: {
            defaultViewport: 'tablet'
        }
    }
}; 