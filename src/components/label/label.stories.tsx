import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from '../input/input';

const meta = {
  title: 'Form Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Label'
  }
};

export const InputCase: Story = {
  render: () => (
    <>
      <Label>Label</Label>
      <Input type="text" />
    </>
  )
};

export const CheckboxCase: Story = {
  render: () => (
    <>
      <Label>
        <Input type="checkbox" />
        Label
      </Label>
    </>
  )
};

export const RadioCase: Story = {
  render: () => (
    <>
      <Label>
        <Input type="radio" />
        Label
      </Label>
    </>
  )
};