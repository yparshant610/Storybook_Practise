import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ResourceIcon } from './ResourceIcon';

const meta: Meta<typeof ResourceIcon> = {
    title: 'Components/ui/Header/icons/Resources Icon/ResourceIcon',
    component: ResourceIcon,
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