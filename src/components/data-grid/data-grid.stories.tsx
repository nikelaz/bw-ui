import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid, onChangeEvent } from './data-grid';
import { Row, Cell, HeaderCell } from '../table/table';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';
import { Pagination } from '../pagination/pagination';

const demoData = [
  {
    id: 1,
    title: 'Phone Bill',
    date: '2024-05-08',
    category: 'Utilities',
    amount: 56.40
  },
  {
    id: 2,
    title: 'Groceries @ Store',
    date: '2024-05-08',
    category: 'Groceries',
    amount: 125.30
  },
  {
    id: 3,
    title: 'Gift',
    date: '2024-05-08',
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
        fontWeight: 'bold',
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
        textAlign: 'right',
        inputType: 'date',
        editable: true,
      },
      {
        field: 'category',
        label: 'Category',
        textAlign: 'right',
        editable: true,
      },
      {
        field: 'amount',
        label: 'Amount',
        inputType: 'number',
        formattingFunction: (val: number) => `$${val}`,
        textAlign: 'right',
        unitSuffix: '$',
        editable: true,
      }
    ],
    onChange: (event: onChangeEvent) => {
      console.log('event', event);
    },
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
