import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RiskFreeButton } from './riskFreeButton';

const meta: Meta<typeof RiskFreeButton> = {
    title: 'Components/ui/Front1/side-left/Button Risk-Free/RiskFreeButton',
    component: RiskFreeButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' }
    }
};

export default meta;

type Story = StoryObj<typeof RiskFreeButton>;

export const Default: Story = {
    args: {
        text: "Try it Risk-free"
    },
};

export const CustomText: Story = {
    args: {
        text: "Start Free Trial"
    },
}; 