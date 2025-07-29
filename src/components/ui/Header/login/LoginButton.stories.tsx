import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LoginButton from './LoginButton';

const meta: Meta<typeof LoginButton> = {
  title: 'Components/ui/Header/login/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

const icon = <span role="img" aria-label="lock">🔒</span>;

export const Primary: Story = {
  args: {
    text: 'Login',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Login',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    text: 'Login',
    variant: 'outline',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Login',
    variant: 'ghost',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    text: 'Login',
    variant: 'danger',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Login',
    size: 'small',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    text: 'Login',
    size: 'large',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Login',
    size: 'medium',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    text: 'Login',
    size: 'medium',
    variant: 'primary',
    loading: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    text: 'Login',
    size: 'medium',
    variant: 'primary',
    icon,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    text: 'Login',
    size: 'medium',
    variant: 'primary',
    icon,
    iconPosition: 'right',
  },
};

export const FullWidth: Story = {
  args: {
    text: 'Login',
    size: 'medium',
    variant: 'primary',
    fullWidth: true,
  },
};

export const IconOnly: Story = {
  args: {
    icon,
    size: 'medium',
    variant: 'primary',
    fullWidth: false,
  },
}; 