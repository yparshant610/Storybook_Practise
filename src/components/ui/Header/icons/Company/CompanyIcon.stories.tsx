import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CompanyIcon } from './CompanyIcon';

const meta: Meta<typeof CompanyIcon> = {
  title: 'Components/ui/Header/icons/Company/CompanyIcon',
  component: CompanyIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CompanyIcon>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };
export const CustomColor: Story = { args: { color: '#009387' } };
export const Disabled: Story = { args: { disabled: true } };
export const Interactive: Story = {
  render: (args) => <CompanyIcon {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Click the icon to toggle the dropdown.'
      }
    }
  }
}; 