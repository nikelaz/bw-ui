import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { HeaderCell } from './header-cell';
import { Row } from './row';
import { Cell } from './cell';
import { TableProgress } from './table-progress';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';
import { Pagination } from '../pagination/pagination';

const meta = {
  title: 'Data Visualization/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <thead>
          <Row>
            <HeaderCell fontSize='l' textColor='dark'>Debt</HeaderCell>
            <HeaderCell textAlign='right'>Leftover debt</HeaderCell>
            <HeaderCell textAlign='right'>Planned</HeaderCell>
            <HeaderCell textAlign='right'>Paid</HeaderCell>
            <HeaderCell mobile={true}>
              <Button style='link' icon={IconTypes.Plus}>New Loan</Button>
            </HeaderCell>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>
              <span>Mortgage</span>
              <TableProgress value={35} />
            </Cell>
            <Cell textAlign='right' header="Leftover debt">$115,000.00</Cell>
            <Cell textAlign='right' header="Planned">$1500.00</Cell>
            <Cell textAlign='right' header="Paid">$450.00</Cell>
          </Row>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>
              <span>Student Loan</span>
              <TableProgress value={60} />
            </Cell>
            <Cell textAlign='right' header="Leftover debt">$50,000.00</Cell>
            <Cell textAlign='right' header="Planned">$1500.00</Cell>
            <Cell textAlign='right' header="Paid">$1100.00</Cell>
          </Row>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>
              <span>Credit Card</span>
              <TableProgress value={25} />
            </Cell>
            <Cell textAlign='right' header="Leftover debt">$2,000.00</Cell>
            <Cell textAlign='right' header="Planned">$150.00</Cell>
            <Cell textAlign='right' header="Paid">$150.00</Cell>
          </Row>
        </tbody>
        <tfoot>
          <Row>
            <Cell desktop={true}>
              <Button style='link' icon={IconTypes.Plus}>New Loan</Button>
            </Cell>
            <Cell fontSize='l' fontWeight='bold' mobile={true}>Debt Totals</Cell>
            <Cell textAlign='right' fontWeight='bold' header="Leftover Debt">$140,000.00</Cell>
            <Cell textAlign='right' fontWeight='bold' header="Planned">$1470.00</Cell>
            <Cell textAlign='right' fontWeight='bold' header="Actual">$1000.00</Cell>
          </Row>
        </tfoot>
      </>
    )
  }
};

export const WithPagination: Story = {
  args: {
    children: (
      <>
        <thead>
          <Row>
            <HeaderCell fontSize='l' textColor='dark'>Transaction</HeaderCell>
            <HeaderCell textAlign='right'>Date</HeaderCell>
            <HeaderCell textAlign='right'>Category</HeaderCell>
            <HeaderCell textAlign='right'>Amount</HeaderCell>
            <HeaderCell mobile={true}>
              <Button style='link' icon={IconTypes.Plus}>New Transaction</Button>
            </HeaderCell>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>Phone Bill</Cell>
            <Cell textAlign='right' header='Date'>22/12/2013</Cell>
            <Cell textAlign='right' header='Category'>Utilities</Cell>
            <Cell textAlign='right' header='Amount'>$56.40</Cell>
          </Row>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>Phone Bill</Cell>
            <Cell textAlign='right' header='Date'>22/12/2013</Cell>
            <Cell textAlign='right' header='Category'>Utilities</Cell>
            <Cell textAlign='right' header='Amount'>$56.40</Cell>
          </Row>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>Phone Bill</Cell>
            <Cell textAlign='right' header='Date'>22/12/2013</Cell>
            <Cell textAlign='right' header='Category'>Utilities</Cell>
            <Cell textAlign='right' header='Amount'>$56.40</Cell>
          </Row>
          <Row>
            <Cell fontSize='l' fontWeight='bold'>Phone Bill</Cell>
            <Cell textAlign='right' header='Date'>22/12/2013</Cell>
            <Cell textAlign='right' header='Category'>Utilities</Cell>
            <Cell textAlign='right' header='Amount'>$56.40</Cell>
          </Row>
        </tbody>
        <tfoot>
          <Row mobileGhost={true}>
            <Cell desktop={true}>
              <Button style='link' icon={IconTypes.Plus}>New Transaction</Button>
            </Cell>
            <Cell textAlign='right' colSpan={3}>
              <Pagination>
                <Button style='link' icon={IconTypes.ChevronLeft}>Previous</Button>
                <Button style='link' icon={IconTypes.ChevronRight} iconPosition='right'>Next</Button>
              </Pagination>
            </Cell>
          </Row>
        </tfoot>
      </>
    )
  }
};

export const ProgressBarOverflow: Story = {
  args: {
    children: (
      <tbody>
        <Row>
          <Cell fontSize='l' fontWeight='bold'>
            <span>Student Loan</span>
            <TableProgress value={110} />
          </Cell>
          <Cell textAlign='right'>$50,000.00</Cell>
          <Cell textAlign='right'>$1500.00</Cell>
          <Cell textAlign='right'>$1100.00</Cell>
        </Row>
      </tbody>
    )
  }
};