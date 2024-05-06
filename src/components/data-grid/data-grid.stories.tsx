import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './data-grid';
import { Row, Cell, HeaderCell } from '../table/table';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';
import { Pagination } from '../pagination/pagination';

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
      {
        field: 'title',
        label: 'Transactions',
        editable: true,
        headerCellRenderer() {
          return (
            <HeaderCell
              fontSize='l'
              textColor='dark'
            >
              {this.label || this.field}
            </HeaderCell>
          );
        }
      },
      {
        field: 'date',
        label: 'Date',
        textAlign: 'right'
      },
      {
        field: 'category',
        label: 'Category',
        textAlign: 'right'
      },
      {
        field: 'amount',
        label: 'Amount',
        formattingFunction: (val: number) => `$${val}`,
        textAlign: 'right'
      }
    ],
    children: (
      <tfoot>
        <Row>
          <Cell>
            <Button type='link' icon={IconTypes.Plus}>New Transaction</Button>
          </Cell>
          <Cell textAlign='right' colSpan={3}>
            <Pagination>
              <Button type='link' icon={IconTypes.ChevronLeft}>Previous</Button>
              <Button type='link' icon={IconTypes.ChevronRight} iconPosition='right'>Next</Button>
            </Pagination>
          </Cell>
        </Row>
      </tfoot>
    )
  }
};
