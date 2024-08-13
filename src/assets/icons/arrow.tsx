import { SVGProps } from "react";
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.833 5.833h8.334v8.334M5.833 14.167l8.334-8.334"
    />
  </svg>
);
export default Arrow;
