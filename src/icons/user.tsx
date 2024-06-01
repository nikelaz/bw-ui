import { IconProps } from '../components/icon/icon.types';

export const UserIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 54"
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby="title"
    className={props.className}
  >
    <title lang="en">user icon</title>
    <path d="M23.625 27C27.2054 27 30.6392 25.5777 33.1709 23.0459C35.7027 20.5142 37.125 17.0804 37.125 13.5C37.125 9.91958 35.7027 6.4858 33.1709 3.95406C30.6392 1.42232 27.2054 0 23.625 0C20.0446 0 16.6108 1.42232 14.0791 3.95406C11.5473 6.4858 10.125 9.91958 10.125 13.5C10.125 17.0804 11.5473 20.5142 14.0791 23.0459C16.6108 25.5777 20.0446 27 23.625 27ZM18.8051 32.0625C8.41641 32.0625 0 40.4789 0 50.8676C0 52.5973 1.40273 54 3.13242 54H44.1176C45.8473 54 47.25 52.5973 47.25 50.8676C47.25 40.4789 38.8336 32.0625 28.4449 32.0625H18.8051Z"/>
  </svg>
);
