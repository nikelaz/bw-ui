import { IconProps } from '../components/icon/icon.types';

export const CalendarIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby="title"
    className={props.className}
  >
    <title lang="en">calendar icon</title>
    <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7v2H5a2 2 0 0 0-2 2zm16 14H5V8h14z"/>
  </svg>
);
