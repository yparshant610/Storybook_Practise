import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { CompanyIcon } from './CompanyIcon';

const meta: Meta<typeof CompanyIcon> = {
    title: 'Components/ui/Header/icons/Company/CompanyIcon',
    component: CompanyIcon,
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