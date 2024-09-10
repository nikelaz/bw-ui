import { IconProps } from '../components/icon/icon.types';

export const ChartIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill={props.fill}
    aria-labelledby="title"
    className={props.className}
  >
    <title lang="en">chart icon</title>
    <path d="M9 6h2v14H9zm4 2h2v12h-2zm4-4h2v16h-2zM5 12h2v8H5z"/>
  </svg>
);
