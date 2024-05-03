import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './data-grid';

const demoData = [
  {
    title: 'Phone Bill',
    date: '22/12/2023',
    category: 'Utilities',
    amount: 56.40
  },
  {
    title: 'Groceries @ Store',
    date: '22/12/2023',
    category: 'Groceries',
    amount: 125.30
  },
  {
    title: 'Gift',
    date: '22/12/2023',
    category: 'Gifts',
    amount: 25.50
  }
];

const meta = {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: demoData,
    cols: [
      { field: 'title', label: 'Title' },
      { field: 'date', label: 'Date' },
      { field: 'category', label: 'Category' },
      { field: 'amount', label: 'Amount' }
    ]
  }
};
