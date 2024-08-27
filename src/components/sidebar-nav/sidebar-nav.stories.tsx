import type { Meta, StoryObj } from '@storybook/react';
import { IconTypes } from '../icon/icon';
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
        <SidebarNavBtn label="Budget" icon={IconTypes.Wallet} />
        <SidebarNavBtn label="Reporting" icon={IconTypes.Gear} />
        <SidebarNavBtn label="Transactions" icon={IconTypes.Gear} />
        <SidebarNavBtn label="Settings" icon={IconTypes.Gear} />
        <SidebarNavBtn label="Logout" icon={IconTypes.User} />
      </>
    )
  }
};
