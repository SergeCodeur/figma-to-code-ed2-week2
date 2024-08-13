import { SVGProps } from "react";
const OrderCart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.584 6.667h7.246c.521 0 .781 0 .972.084.843.372.466 1.308.324 1.981a.403.403 0 0 1-.224.28c-.482.228-.82.662-.908 1.166L16.5 12.99c-.218 1.237-.292 3.006-1.376 3.877-.796.633-1.942.633-4.234.633H9.11c-2.292 0-3.438 0-4.233-.633-1.085-.872-1.159-2.64-1.376-3.877l-.494-2.812a1.608 1.608 0 0 0-.908-1.167.403.403 0 0 1-.225-.279c-.141-.673-.518-1.61.325-1.981.19-.084.45-.084.971-.084h3.08"
    />
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.666 10H8.333"
    />
    <path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.417 9.167 8.334 2.5m4.166 0 2.084 4.167"
    />
  </svg>
);
export default OrderCart;
