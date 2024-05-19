import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, useDialog } from './dialog';
import { DialogForm } from './dialog-form';
import { DialogFooter } from './dialog-footer';
import { Button } from '../button/button';
import { Input } from '../input/input';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen, onKeyDown] = useDialog(true);
    return (
      <Dialog
        isOpen={isOpen}
        hasCloseBtn={true}
        onClose={() => setIsOpen(false)}
        onKeyDown={onKeyDown}
        title="Heading"
      >
        <form method="dialog">
          <DialogForm>
            <Input required={true} type="text" placeholder="Title" />
            <Input required={true} type="number" placeholder="Amount" />
          </DialogForm>
          <DialogFooter>
            <Button autoFocus={true}>Save Changes</Button>
          </DialogFooter>
        </form>
      </Dialog>
    );
  }
};
