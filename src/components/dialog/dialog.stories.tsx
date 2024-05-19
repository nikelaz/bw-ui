import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, useDialog } from './dialog';
import { DialogForm } from './dialog-form';
import { DialogFooter } from './dialog-footer';
import { Button } from '../button/button';
import { Input } from '../input/input';

const meta = {
  title: 'Modals/Dialog',
  component: Dialog,
  parameters: {
  },
  args: {
    hasCloseBtn: true,
    title: 'Heading',
  },
  render: (args) => {
    const [isOpen, setIsOpen, onKeyDown] = useDialog(true);
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et leo risus. Vivamus feugiat est pharetra malesuada pellentesque. Nunc nulla leo, varius quis efficitur in, convallis sit amet sapien. Etiam vel magna elit. Duis porttitor vulputate turpis, vitae auctor metus euismod vitae. In neque leo, ornare sed neque eget, pulvinar auctor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vehicula arcu risus, vel sodales neque imperdiet sed. Nunc non dolor vel nibh faucibus fringilla. Mauris orci eros, pellentesque non ornare non, porttitor eget enim. Proin quis facilisis lorem, eget egestas diam.
        </p>
        <Dialog
          isOpen={isOpen}
          hasCloseBtn={args.hasCloseBtn}
          onClose={() => setIsOpen(false)}
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
      </>
    );
  }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
};
