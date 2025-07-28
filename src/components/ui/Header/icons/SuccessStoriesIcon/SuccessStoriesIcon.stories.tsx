import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SuccessStoriesIcon } from './SuccessStoriesIcon';

const meta: Meta<typeof SuccessStoriesIcon> = {
    title: 'Components/ui/Header/icons/SuccessStoriesIcon',
    component: SuccessStoriesIcon,
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