import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { IconTypes } from '../icon/icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Button'
  }
};

export const IconButton: Story = {
  args: {
    children: 'Icon Button',
    icon: IconTypes.Plus
  },
};
