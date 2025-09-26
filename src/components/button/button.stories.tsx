import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { IconTypes } from '../icon/icon';

const meta = {
  title: 'Navigation/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const IconButtonRight: Story = {
  args: {
    children: 'Icon Button',
    icon: IconTypes.Plus,
    iconPosition: 'right'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    style: 'secondary'
  }
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    style: 'danger'
  }
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    style: 'link'
  }
};

export const IconLink: Story = {
  args: {
    children: 'Link Button',
    style: 'link',
    icon: IconTypes.Plus
  }
};

export const IconLinkRight: Story = {
  args: {
    children: 'Link Button',
    style: 'link',
    icon: IconTypes.Plus,
    iconPosition: 'right'
  }
};

export const IconOnly: Story = {
  args: {
    icon: IconTypes.Plus,
    iconPosition: 'right'
  }
};
