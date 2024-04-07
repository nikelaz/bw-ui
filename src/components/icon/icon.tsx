import { PlusIcon } from '../../icons/plus';
import { CalendarIcon } from '../../icons/calendar';
import { ChartIcon } from '../../icons/chart';
import { ChevronDownIcon } from '../../icons/chevron-down';
import { GearIcon } from '../../icons/gear';
import { SearchIcon } from '../../icons/search';
import { UserIcon } from '../../icons/user';
import { WalletIcon } from '../../icons/wallet';
import { XmarkIcon } from '../../icons/xmark';

export enum IconTypes {
  Plus = 1,
  Calendar,
  Chart,
  ChevronDown,
  Gear,
  Search,
  User,
  Wallet,
  XMark
}

export type IconProps = Readonly<{
  width?: number,
  height?: number,
  fill?: string,
  type?: IconTypes,
  className?:string,
}>;

export const Icon = (props: IconProps) => {
  const iconProps = {
    ...props,
    className: props.className ? `icon ${props.className}` : 'icon',
  };

  switch (props.type) {
    case IconTypes.Plus:
      return <PlusIcon {...iconProps} />
    case IconTypes.Calendar:
      return <CalendarIcon {...iconProps} />
    case IconTypes.Chart:
      return <ChartIcon {...iconProps} />
    case IconTypes.ChevronDown:
      return <ChevronDownIcon {...iconProps} />
    case IconTypes.Gear:
      return <GearIcon {...iconProps} />
    case IconTypes.Search:
      return <SearchIcon {...iconProps} />
    case IconTypes.User:
      return <UserIcon {...iconProps} />
    case IconTypes.Wallet:
      return <WalletIcon {...iconProps} />
    case IconTypes.XMark:
      return <XmarkIcon {...iconProps} />
  }
};
