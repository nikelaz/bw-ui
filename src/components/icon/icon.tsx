import { PlusIcon } from '../../icons/plus';
import { CalendarIcon } from '../../icons/calendar';
import { ChartIcon } from '../../icons/chart';
import { ChevronDownIcon } from '../../icons/chevron-down';
import { ChevronLeftIcon } from '../../icons/chevron-left';
import { ChevronRightIcon } from '../../icons/chevron-right';
import { GearIcon } from '../../icons/gear';
import { SearchIcon } from '../../icons/search';
import { UserIcon } from '../../icons/user';
import { WalletIcon } from '../../icons/wallet';
import { XmarkIcon } from '../../icons/xmark';
import { BinIcon } from '../../icons/bin';

export enum IconTypes {
  Plus = 1,
  Calendar,
  Chart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gear,
  Search,
  User,
  Wallet,
  XMark,
  Bin,
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
    case IconTypes.ChevronLeft:
      return <ChevronLeftIcon {...iconProps} />
    case IconTypes.ChevronRight:
      return <ChevronRightIcon {...iconProps} />
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
    case IconTypes.Bin:
      return <BinIcon {...iconProps} />
  }
};
