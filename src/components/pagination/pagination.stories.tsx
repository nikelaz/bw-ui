import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button type='link' icon={IconTypes.ChevronLeft}>Previous</Button>
        <Button type='link' icon={IconTypes.ChevronRight} iconPosition='right'>Next</Button>
      </>
    )
  }
};
