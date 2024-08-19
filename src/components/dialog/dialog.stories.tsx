import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, useDialog } from './dialog';
import { DialogForm } from './dialog-form';
import { DialogFooter } from './dialog-footer';
import { Button } from '../button/button';
import { Input } from '../input/input';

const meta = {
  title: 'Modals/Dialog',
  component: Dialog,
  args: {
    hasCloseBtn: true,
    title: 'Heading',
  },
  render: (args) => {
    const [isOpen, setIsOpen, onKeyDown] = useDialog(true);
    return (
      <Dialog
        isOpen={isOpen}
        hasCloseBtn={args.hasCloseBtn}
        onClose={() => { setIsOpen(false); console.log('onClose'); }}
        onKeyDown={onKeyDown}
        title={args.title}
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
};
