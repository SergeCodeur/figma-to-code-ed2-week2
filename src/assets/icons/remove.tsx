import { SVGProps } from "react";
const Remove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g stroke="#1D1D1D" strokeWidth={1.5} clipPath="url(#a)">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.333 10H6.666" />
      <path d="M18.333 10a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Remove;
