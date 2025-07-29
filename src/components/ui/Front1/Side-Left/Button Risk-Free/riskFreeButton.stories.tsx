import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RiskFreeButton from './riskFreeButton';

const meta: Meta<typeof RiskFreeButton> = {
  title: 'Components/ui/Front1/Side-Left/Button Risk-Free/riskFreeButton',
  component: RiskFreeButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof RiskFreeButton>;

const icon = <span role="img" aria-label="star">⭐</span>;

export const Primary: Story = {
  args: {
    text: 'Try it Risk-free',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Try it Risk-free',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    text: 'Try it Risk-free',
    variant: 'outline',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Try it Risk-free',
    variant: 'ghost',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    text: 'Try it Risk-free',
    variant: 'danger',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'small',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'large',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'medium',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'medium',
    variant: 'primary',
    loading: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'medium',
    variant: 'primary',
    icon,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'medium',
    variant: 'primary',
    icon,
    iconPosition: 'right',
  },
};

export const FullWidth: Story = {
  args: {
    text: 'Try it Risk-free',
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

export const DarkMode: Story = {
  args: {
    text: 'Try it Risk-free',
    size: 'medium',
    variant: 'primary',
    darkMode: true,
  },
}; 