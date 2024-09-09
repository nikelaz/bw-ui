import type { Meta, StoryObj } from '@storybook/react';
import { Scale } from './scale';

const meta = {
  title: 'Data Visualization/Scale',
  component: Scale,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Scale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    topValue: 1,
    topLabel: 'Planned',
    unit: '$',
    progress: 2,
    leftValue: 1,
    leftLabel: 'Actual',
    rightValue: 6000,
    rightLabel: 'Current Cash'
  }
};

export const Overflow: Story = {
  args: {
    topValue: 5000,
    topLabel: 'Planned',
    unit: '$',
    progress: 6000/5000 * 100,
    leftValue: 6000,
    leftLabel: 'Actual',
    rightValue: -1000,
    rightLabel: 'Current Cash'
  }
};
