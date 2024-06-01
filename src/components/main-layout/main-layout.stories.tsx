import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout, MainLayoutContainer } from './main-layout';
import { SidebarNav } from '../sidebar-nav/sidebar-nav';
import { SidebarNavLogo } from '../sidebar-nav/sidebar-nav-logo';
import { SidebarNavBtn } from '../sidebar-nav/sidebar-nav-btn';
import { Icon, IconTypes } from '../icon/icon';

const meta = {
  title: 'Layout/Main Layout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SidebarNav>
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
        </SidebarNav>
        <MainLayoutContainer>
          <p>
            Content
          </p>
        </MainLayoutContainer>
      </>
    )
  }
};
