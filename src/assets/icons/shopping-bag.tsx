import { SVGProps } from "react";
const ShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 1.667 2.5 5v11.667a1.667 1.667 0 0 0 1.667 1.666h11.666a1.666 1.666 0 0 0 1.667-1.666V5L15 1.667H5ZM2.5 5h15"
    />
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.333 8.333a3.333 3.333 0 0 1-6.667 0"
    />
  </svg>
);
export default ShoppingBag;
