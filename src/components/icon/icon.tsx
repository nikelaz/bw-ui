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
  width: number,
  height: number,
  fill: string,
  type?: IconTypes
}>;

export const Icon = (props: IconProps) => {
  switch (props.type) {
    case IconTypes.Plus:
      return <PlusIcon {...props} />
    case IconTypes.Calendar:
      return <CalendarIcon {...props} />
    case IconTypes.Chart:
      return <ChartIcon {...props} />
    case IconTypes.ChevronDown:
      return <ChevronDownIcon {...props} />
    case IconTypes.Gear:
      return <GearIcon {...props} />
    case IconTypes.Search:
      return <SearchIcon {...props} />
    case IconTypes.User:
      return <UserIcon {...props} />
    case IconTypes.Wallet:
      return <WalletIcon {...props} />
    case IconTypes.XMark:
      return <XmarkIcon {...props} />
  }
};
