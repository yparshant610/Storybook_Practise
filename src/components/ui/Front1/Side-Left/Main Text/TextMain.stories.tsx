import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextMain } from './TextMain';

const meta: Meta<typeof TextMain> = {
    title: 'Components/ui/Front1/Side-Left/Main Text/TextMain',
    component: TextMain,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextMain>;

export const Default: Story = {
    args: {}
}; 