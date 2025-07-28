import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MainPage } from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'Components/ui/Front1/Main/MainPage',
    component: MainPage,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
    args: {},
}; 