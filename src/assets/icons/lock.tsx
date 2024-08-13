import { SVGProps } from "react";
const Lock = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M10 13.75v-1.667"
    />
    <path
      stroke="#1D1D1D"
      strokeWidth={1.5}
      d="M3.557 15.704c.187 1.392 1.34 2.482 2.743 2.547 1.18.054 2.38.082 3.7.082 1.32 0 2.52-.028 3.7-.082 1.403-.065 2.556-1.155 2.744-2.547.122-.908.223-1.84.223-2.787 0-.948-.101-1.88-.223-2.788-.188-1.391-1.34-2.482-2.744-2.546A79.538 79.538 0 0 0 10 7.5c-1.32 0-2.52.028-3.7.083-1.403.064-2.556 1.155-2.743 2.546-.123.909-.224 1.84-.224 2.788 0 .948.101 1.879.224 2.787Z"
    />
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.25 7.5V5.417a3.75 3.75 0 1 1 7.5 0V7.5"
    />
  </svg>
);
export default Lock;
