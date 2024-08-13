import { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.219 3.328c-2.235-1.37-4.186-.818-5.357.062-.48.36-.72.541-.862.541-.142 0-.382-.18-.862-.541-1.172-.88-3.122-1.432-5.357-.062C.848 5.128.185 11.062 6.949 16.07c1.289.953 1.933 1.43 3.05 1.43 1.118 0 1.763-.477 3.051-1.43 6.765-5.008 6.101-10.943 3.169-12.742Z"
    />
  </svg>
);
export default Heart;
