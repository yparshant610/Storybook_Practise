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