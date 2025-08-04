import type { Meta, StoryObj } from '@storybook/react';
import { ReusableIcon } from './ReusableIcon';

const meta: Meta<typeof ReusableIcon> = {
  title: 'Components/ui/Header/icons/ReusableIcon/ReusableIcon',
  component: ReusableIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['simple', 'dropdown'],
    },
    color: {
      control: { type: 'color' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple icon stories
export const SimpleIcon: Story = {
  args: {
    label: 'Pricing',
    type: 'simple',
    size: 'medium',
  },
};

export const SimpleIconSmall: Story = {
  args: {
    label: 'About',
    type: 'simple',
    size: 'small',
  },
};

export const SimpleIconLarge: Story = {
  args: {
    label: 'Contact',
    type: 'simple',
    size: 'large',
  },
};

export const SimpleIconDisabled: Story = {
  args: {
    label: 'Disabled',
    type: 'simple',
    disabled: true,
  },
};

// Dropdown icon stories
export const DropdownIcon: Story = {
  args: {
    label: 'Resources',
    type: 'dropdown',
    size: 'medium',
    dropdownItems: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Tutorials', href: '#tutorials' },
    ],
  },
};

export const CompanyDropdown: Story = {
  args: {
    label: 'Company',
    type: 'dropdown',
    size: 'medium',
    dropdownItems: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};

export const CustomColorIcon: Story = {
  args: {
    label: 'Custom Color',
    type: 'simple',
    color: '#007bff',
  },
};

export const DropdownWithActions: Story = {
  args: {
    label: 'Actions',
    type: 'dropdown',
    dropdownItems: [
      { 
        label: 'Save', 
        onClick: () => alert('Save clicked!') 
      },
      { 
        label: 'Export', 
        onClick: () => alert('Export clicked!') 
      },
      { 
        label: 'Delete', 
        onClick: () => alert('Delete clicked!') 
      },
    ],
  },
};
