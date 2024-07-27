import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';
import { MonthsSwitch } from '../months-switch/months-switch';
import { DropdownOption } from './dropdown.types';

const meta = {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <MonthsSwitch>January 2024</MonthsSwitch>,
    options: [
      {
        label: 'Option 1',
        value: 1,
        isActive: true,
      },
      {
        label: 'Option 2',
        value: 2,
        isActive: false,
      },
      {
        label: 'Option 3',
        value: 3,
        isActive: false,
      }
    ],
    onChange: (data: DropdownOption) => console.log(data)
  }
};
