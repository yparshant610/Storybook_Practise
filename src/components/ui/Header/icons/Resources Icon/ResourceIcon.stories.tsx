import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ResourceIcon } from './ResourceIcon';

const meta: Meta<typeof ResourceIcon> = {
  title: 'Components/ui/Header/icons/Resources Icon/ResourceIcon',
  component: ResourceIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResourceIcon>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };
export const CustomColor: Story = { args: { color: '#009387' } };
export const Disabled: Story = { args: { disabled: true } };
export const Interactive: Story = {
  render: (args) => <ResourceIcon {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Click the icon to toggle the dropdown.'
      }
    }
  }
}; 