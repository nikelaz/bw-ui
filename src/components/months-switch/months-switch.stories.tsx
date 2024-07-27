import type { Meta, StoryObj } from '@storybook/react';
import { MonthsSwitch } from './months-switch';

const meta = {
  title: 'Navigation/Months Switch',
  component: MonthsSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MonthsSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'January 2024'
  }
};
