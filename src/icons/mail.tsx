import { IconProps } from '../components/icon/icon.types';

export const MailIcon  = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby="title"
    className={props.className}
  >
    <title lang="en">mail icon</title>
    <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/>
  </svg>
);
