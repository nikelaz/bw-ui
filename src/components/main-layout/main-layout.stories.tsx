import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout, MainLayoutContainer } from './main-layout';
import { SidebarNav } from '../sidebar-nav/sidebar-nav';
import { SidebarNavLogo } from '../sidebar-nav/sidebar-nav-logo';
import { SidebarNavBtn } from '../sidebar-nav/sidebar-nav-btn';
import { IconTypes } from '../icon/icon';

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
          <SidebarNavBtn label="Budget" icon={IconTypes.Wallet} />
          <SidebarNavBtn label="Reporting" icon={IconTypes.Chart} />
          <SidebarNavBtn label="Transactions" isActive={true} icon={IconTypes.CreditCard} />
          <SidebarNavBtn label="Settings" icon={IconTypes.Gear} />
        </SidebarNav>
        <MainLayoutContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit vehicula efficitur. Morbi vehicula in nunc ac egestas. Nam sit amet mi purus. Quisque a laoreet purus. Aliquam luctus eros massa, in ullamcorper nisi facilisis quis. Ut sed erat purus. Quisque metus augue, congue sollicitudin dui vitae, rutrum ornare ligula. Suspendisse placerat metus sed elit hendrerit, vitae ornare arcu vulputate. Maecenas et ultrices purus.</p>
        </MainLayoutContainer>
      </>
    )
  }
};
