import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import LoginButton from './LoginButton';

const meta: Meta<typeof LoginButton> = {
  title: 'Components/ui/Header/login/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const Default: Story = {
  args: {
    text: 'Login',
  },
}; 