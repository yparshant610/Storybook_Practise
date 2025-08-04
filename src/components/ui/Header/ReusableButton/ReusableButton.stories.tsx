import type { Meta, StoryObj } from '@storybook/react';
import ReusableButton from './ReusableButton';

const meta: Meta<typeof ReusableButton> = {
  title: 'Components/ui/Header/ReusableButton/ReusableButton',
  component: ReusableButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    textColor: {
      control: { type: 'color' },
    },
    borderColor: {
      control: { type: 'color' },
    },
    hoverBackgroundColor: {
      control: { type: 'color' },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button stories
export const LoginButton: Story = {
  args: {
    text: 'Login',
    variant: 'outline',
    size: 'medium',
  },
};

export const CreateAccountButton: Story = {
  args: {
    text: 'Create free account',
    variant: 'primary',
    size: 'medium',
  },
};

// Size variants
export const SmallButton: Story = {
  args: {
    text: 'Small Button',
    size: 'small',
  },
};

export const MediumButton: Story = {
  args: {
    text: 'Medium Button',
    size: 'medium',
  },
};

export const LargeButton: Story = {
  args: {
    text: 'Large Button',
    size: 'large',
  },
};

// Variant stories
export const PrimaryButton: Story = {
  args: {
    text: 'Primary',
    variant: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'Secondary',
    variant: 'secondary',
  },
};

export const OutlineButton: Story = {
  args: {
    text: 'Outline',
    variant: 'outline',
  },
};

export const GhostButton: Story = {
  args: {
    text: 'Ghost',
    variant: 'ghost',
  },
};

export const DangerButton: Story = {
  args: {
    text: 'Danger',
    variant: 'danger',
  },
};

// State stories
export const DisabledButton: Story = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
};

export const LoadingButton: Story = {
  args: {
    text: 'Loading...',
    loading: true,
  },
};

// With icons
export const ButtonWithLeftIcon: Story = {
  args: {
    text: 'With Icon',
    icon: '🔐',
    iconPosition: 'left',
  },
};

export const ButtonWithRightIcon: Story = {
  args: {
    text: 'With Icon',
    icon: '→',
    iconPosition: 'right',
  },
};

// Full width
export const FullWidthButton: Story = {
  args: {
    text: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Interactive examples
export const InteractiveLogin: Story = {
  args: {
    text: 'Login',
    variant: 'outline',
    onClick: () => alert('Login clicked!'),
  },
};

export const InteractiveCreateAccount: Story = {
  args: {
    text: 'Create free account',
    variant: 'primary',
    onClick: () => alert('Create account clicked!'),
  },
};

// Custom color examples
export const CustomBlueButton: Story = {
  args: {
    text: 'Custom Blue',
    backgroundColor: '#007bff',
    textColor: '#ffffff',
    borderColor: '#007bff',
    hoverBackgroundColor: '#0056b3',
  },
};

export const CustomGreenButton: Story = {
  args: {
    text: 'Custom Green',
    backgroundColor: '#28a745',
    textColor: '#ffffff',
    borderColor: '#28a745',
    hoverBackgroundColor: '#1e7e34',
  },
};

export const CustomPurpleButton: Story = {
  args: {
    text: 'Custom Purple',
    backgroundColor: '#6f42c1',
    textColor: '#ffffff',
    borderColor: '#6f42c1',
    hoverBackgroundColor: '#5a32a3',
  },
};

export const CustomOrangeOutline: Story = {
  args: {
    text: 'Custom Orange Outline',
    variant: 'outline',
    textColor: '#fd7e14',
    borderColor: '#fd7e14',
    hoverBackgroundColor: '#fd7e14',
  },
};

export const GradientStyleButton: Story = {
  args: {
    text: 'Gradient Style',
    backgroundColor: '#ff6b6b',
    textColor: '#ffffff',
    borderColor: '#ff6b6b',
    hoverBackgroundColor: '#ff5252',
    style: {
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      border: 'none',
    },
  },
};

export const CustomColorWithIcon: Story = {
  args: {
    text: 'Custom with Icon',
    backgroundColor: '#17a2b8',
    textColor: '#ffffff',
    borderColor: '#17a2b8',
    hoverBackgroundColor: '#138496',
    icon: '⭐',
    iconPosition: 'left',
  },
};
