import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import CreateFreeAccountButton from './CreateFreeAccountButton';

const meta: Meta<typeof CreateFreeAccountButton> = {
  title: 'Components/ui/Header/createFreeAccount/CreateFreeAccountButton',
  component: CreateFreeAccountButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateFreeAccountButton>;

export const Default: Story = {
  args: {
    text: 'Create free account',
  },
}; 