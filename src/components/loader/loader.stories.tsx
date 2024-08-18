import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './loader';

const meta = {
  title: 'Data Visualization/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 75,
    height: 75,
  }
};
