import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Text'
  }
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email'
  }
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search'
  }
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
  }
};

export const Radio: Story = {
  args: {
    type: 'radio',
  }
};