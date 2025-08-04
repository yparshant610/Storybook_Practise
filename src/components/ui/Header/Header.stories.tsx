import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/ui/Header/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    // Button variant controls
    loginButtonVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Login button style variant',
    },
    createAccountButtonVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Create account button style variant',
    },
    // Button color controls
    loginButtonColor: {
      control: { type: 'color' },
      description: 'Login button background color',
    },
    createAccountButtonColor: {
      control: { type: 'color' },
      description: 'Create account button background color',
    },
    loginButtonTextColor: {
      control: { type: 'color' },
      description: 'Login button text color',
    },
    createAccountButtonTextColor: {
      control: { type: 'color' },
      description: 'Create account button text color',
    },
    loginButtonBorderColor: {
      control: { type: 'color' },
      description: 'Login button border color',
    },
    createAccountButtonBorderColor: {
      control: { type: 'color' },
      description: 'Create account button border color',
    },
    // Icon controls
    iconSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of navigation icons',
    },
    iconColor: {
      control: { type: 'color' },
      description: 'Color of navigation icons',
    },
    // Existing controls
    loginDisabled: {
      control: { type: 'boolean' },
      description: 'Disable login button',
    },
    createAccountDisabled: {
      control: { type: 'boolean' },
      description: 'Disable create account button',
    },
    loginLoading: {
      control: { type: 'boolean' },
      description: 'Show loading state on login button',
    },
    createAccountLoading: {
      control: { type: 'boolean' },
      description: 'Show loading state on create account button',
    },
    hideLogin: {
      control: { type: 'boolean' },
      description: 'Hide login button',
    },
    hideCreateAccount: {
      control: { type: 'boolean' },
      description: 'Hide create account button',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Enable dark mode styling',
    },
    mobile: {
      control: { type: 'boolean' },
      description: 'Enable mobile responsive styling',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
export const AllButtonsDisabled: Story = {
  render: () => <Header loginDisabled createAccountDisabled />,
};
export const LoginLoading: Story = {
  render: () => <Header loginLoading />,
};
export const CreateAccountLoading: Story = {
  render: () => <Header createAccountLoading />,
};
export const OnlyLogin: Story = {
  render: () => <Header hideCreateAccount />,
};
export const OnlyCreateAccount: Story = {
  render: () => <Header hideLogin />,
};
export const CustomBackground: Story = {
  render: () => <div style={{ background: '#f0f0f0', padding: 24 }}><Header /></div>,
};
export const CustomLogo: Story = {
  render: () => <Header logo={<span style={{ fontWeight: 700, fontSize: 28, color: '#ff6d2c' }}>MyBrand</span>} />,
};
export const CustomNav: Story = {
  render: () => <Header navItems={<><span style={{ fontWeight: 500 }}>Docs</span><span style={{ fontWeight: 500 }}>API</span></>} />,
};
export const CustomActions: Story = {
  render: () => <Header actions={<button style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}>🔔</button>} />,
};
export const DarkMode: Story = {
  render: () => <Header darkMode />,
};
export const Mobile: Story = {
  render: () => <Header mobile />,
};

// New customization examples
export const CustomButtonVariants: Story = {
  args: {
    loginButtonVariant: 'secondary',
    createAccountButtonVariant: 'danger',
  },
};

export const CustomButtonColors: Story = {
  args: {
    loginButtonColor: '#007bff',
    loginButtonTextColor: '#ffffff',
    loginButtonBorderColor: '#007bff',
    createAccountButtonColor: '#28a745',
    createAccountButtonTextColor: '#ffffff',
    createAccountButtonBorderColor: '#28a745',
  },
};

export const CustomIconStyling: Story = {
  args: {
    iconSize: 'large',
    iconColor: '#6f42c1',
  },
};

export const FullCustomization: Story = {
  args: {
    // Button variants
    loginButtonVariant: 'ghost',
    createAccountButtonVariant: 'outline',
    // Button colors
    loginButtonColor: '#17a2b8',
    loginButtonTextColor: '#ffffff',
    createAccountButtonColor: '#fd7e14',
    createAccountButtonTextColor: '#ffffff',
    createAccountButtonBorderColor: '#fd7e14',
    // Icon styling
    iconSize: 'small',
    iconColor: '#dc3545',
  },
};

export const PurpleTheme: Story = {
  args: {
    loginButtonVariant: 'outline',
    createAccountButtonVariant: 'primary',
    loginButtonTextColor: '#6f42c1',
    loginButtonBorderColor: '#6f42c1',
    createAccountButtonColor: '#6f42c1',
    createAccountButtonTextColor: '#ffffff',
    iconColor: '#6f42c1',
  },
};

export const GreenTheme: Story = {
  args: {
    loginButtonVariant: 'ghost',
    createAccountButtonVariant: 'primary',
    loginButtonTextColor: '#28a745',
    createAccountButtonColor: '#28a745',
    createAccountButtonTextColor: '#ffffff',
    iconColor: '#28a745',
    iconSize: 'medium',
  },
}; 