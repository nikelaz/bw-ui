import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './textarea';

const meta = {
  title: 'Form Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {}
};