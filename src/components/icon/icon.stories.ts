import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconTypes } from './icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Icons/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    width: 100,
    height: 100,
    fill: '#000',
    type: IconTypes.Plus,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plus: Story = {
  args: {
    type: IconTypes.Plus,
  },
};

export const Calendar: Story = {
  args: {
    type: IconTypes.Calendar,
  },
};

export const Chart: Story = {
  args: {
    type: IconTypes.Chart,
  },
};

export const ChevronDown: Story = {
  args: {
    type: IconTypes.ChevronDown,
  },
};

export const ChevronLeft: Story = {
  args: {
    type: IconTypes.ChevronLeft,
  },
};

export const ChevronRight: Story = {
  args: {
    type: IconTypes.ChevronRight,
  },
};

export const Gear: Story = {
  args: {
    type: IconTypes.Gear,
  },
};

export const Search: Story = {
  args: {
    type: IconTypes.Search,
  },
};

export const User: Story = {
  args: {
    type: IconTypes.User,
  },
};

export const Wallet: Story = {
  args: {
    type: IconTypes.Wallet,
  },
};

export const XMark: Story = {
  args: {
    type: IconTypes.XMark,
  },
};

export const Floppy: Story = {
  args: {
    type: IconTypes.Floppy,
  },
};

export const Apple: Story = {
  args: {
    type: IconTypes.Apple,
  },
};

export const Google: Story = {
  args: {
    type: IconTypes.Google,
  },
};

export const Mail: Story = {
  args: {
    type: IconTypes.Mail,
  },
};
