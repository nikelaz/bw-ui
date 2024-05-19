export type DialogProps = Readonly<{
  children?: React.ReactNode,
  isOpen?: boolean,
  onKeyDown?: React.KeyboardEventHandler,
  onClose?: React.EventHandler<any>,
  title?: string,
  hasCloseBtn?: boolean
}>;

export type DialogHookReturnType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.KeyboardEventHandler
];

export type DialogContainerProps = Readonly<{
  className?: string,
  children?: React.ReactNode,
}>;
