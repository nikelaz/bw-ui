import { IconProps } from '../components/icon/icon.types';

export const LogoutIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby="title"
    className={props.className}
  >
    <title lang="en">logout icon</title>
    <path d="M16 13v-2H7V8l-5 4 5 4v-3z"/>
    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/>
  </svg>
);
