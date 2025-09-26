import { IconProps } from './icon.types';
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
import { FloppyIcon } from '../../icons/floppy';
import { LockIcon } from '../../icons/lock';
import { LogoutIcon } from '../../icons/logout';
import { CreditCardIcon } from '../../icons/credit-card';
import { AppleIcon } from '../../icons/apple';
import { GoogleIcon } from '../../icons/google';
import { MailIcon } from '../../icons/mail';

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
  Floppy,
  Lock,
  Logout,
  CreditCard,
  Apple,
  Google,
  Mail,
};

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
    case IconTypes.Floppy:
      return <FloppyIcon {...iconProps} />
    case IconTypes.Lock:
      return <LockIcon {...iconProps} />
    case IconTypes.Logout:
      return <LogoutIcon {...iconProps} />
    case IconTypes.CreditCard:
      return <CreditCardIcon {...iconProps} />
    case IconTypes.Apple:
      return <AppleIcon {...iconProps} />
    case IconTypes.Google:
      return <GoogleIcon {...iconProps} />
    case IconTypes.Mail:
      return <MailIcon {...iconProps} />
  }
};
