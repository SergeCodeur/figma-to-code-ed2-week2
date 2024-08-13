import { SVGProps } from "react";
const Card = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.667 10c0-2.948 0-4.422.877-5.406.14-.157.295-.303.462-.435 1.046-.826 2.612-.826 5.744-.826h2.5c3.132 0 4.698 0 5.744.826.167.132.322.278.462.435.877.984.877 2.458.877 5.406 0 2.948 0 4.422-.877 5.406a3.65 3.65 0 0 1-.462.435c-1.046.826-2.612.826-5.744.826h-2.5c-3.132 0-4.698 0-5.744-.826a3.65 3.65 0 0 1-.462-.435c-.877-.984-.877-2.458-.877-5.406Z"
    />
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.334 13.333h1.25M12.084 13.333H15"
    />
    <path
      stroke="#1D1D1D"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.667 7.5h16.666"
    />
  </svg>
);
export default Card;
