import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconTypes } from '../icon/icon';
import { SidebarNav } from './sidebar-nav';
import { SidebarNavLogo } from './sidebar-nav-logo';
import { SidebarNavBtn } from './sidebar-nav-btn';

const meta = {
  title: 'Navigation/Sidebar Navigation',
  component: SidebarNav,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SidebarNavLogo />
        <SidebarNavBtn label="Budget">
          <Icon type={IconTypes.Wallet} width={24} height={24} fill="currentColor" />
        </SidebarNavBtn>
        <SidebarNavBtn label="Settings" isActive={true}>
          <Icon type={IconTypes.Gear} width={27} height={24} fill="currentColor" />
        </SidebarNavBtn>
        <SidebarNavBtn label="User Profile">
          <Icon type={IconTypes.User} width={27} height={24} fill="currentColor" />
        </SidebarNavBtn>
      </>
    )
  }
};
