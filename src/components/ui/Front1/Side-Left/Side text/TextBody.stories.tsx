import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextBody } from './TextBody';

const meta: Meta<typeof TextBody> = {
    title: 'Components/ui/Front1/side-left/Side text/TextBody',
    component: TextBody,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextBody>;

export const Default: Story = {
    args: {
        text: "Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce."
    },
};

export const CustomText: Story = {
    args: {
        text: "Create compelling marketing campaigns that drive real results. Connect with your audience through personalized postcards."
    },
}; 