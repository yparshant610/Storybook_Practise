import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PricingIcon } from './PricingIcon';

const meta: Meta<typeof PricingIcon> = {
  title: 'Components/ui/Header/icons/Pricing Icon/PricingIcon',
  component: PricingIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PricingIcon>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };
export const CustomColor: Story = { args: { color: '#009387' } };
export const Disabled: Story = { args: { disabled: true } };
export const Clickable: Story = {
  render: (args) => (
    <div onClick={() => alert('Clicked!')} style={{ cursor: 'pointer' }}>
      <PricingIcon {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Clickable PricingIcon for demonstration.'
      }
    }
  }
}; 