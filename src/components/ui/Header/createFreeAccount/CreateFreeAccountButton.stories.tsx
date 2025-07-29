import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CreateFreeAccountButton from './CreateFreeAccountButton';

const meta: Meta<typeof CreateFreeAccountButton> = {
  title: 'Components/ui/Header/createFreeAccount/CreateFreeAccountButton',
  component: CreateFreeAccountButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof CreateFreeAccountButton>;

const icon = <span role="img" aria-label="star">⭐</span>;

export const Primary: Story = {
  args: {
    text: 'Create free account',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Create free account',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    text: 'Create free account',
    variant: 'outline',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Create free account',
    variant: 'ghost',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    text: 'Create free account',
    variant: 'danger',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Create free account',
    size: 'small',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    text: 'Create free account',
    size: 'large',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Create free account',
    size: 'medium',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    text: 'Create free account',
    size: 'medium',
    variant: 'primary',
    loading: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    text: 'Create free account',
    size: 'medium',
    variant: 'primary',
    icon,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    text: 'Create free account',
    size: 'medium',
    variant: 'primary',
    icon,
    iconPosition: 'right',
  },
};

export const FullWidth: Story = {
  args: {
    text: 'Create free account',
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