import { SVGProps } from "react";

const CircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={42}
    fill="none"
    {...props}
  >
    <rect width={39} height={39} x={2} y={1.5} fill="#fff" rx={19.5} />
    <rect
      width={39}
      height={39}
      x={2}
      y={1.5}
      stroke="#1D1D1D"
      strokeWidth={3}
      rx={19.5}
    />
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m29.5 15-11 12-5-5.454"
    />
  </svg>
);
export default CircleCheck;
