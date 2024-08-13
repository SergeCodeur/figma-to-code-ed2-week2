import { SVGProps } from "react";
const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={9.25} stroke="#1D1D1D" strokeWidth={1.5} />
  </svg>
);
export default Circle;
