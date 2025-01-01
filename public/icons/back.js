import * as React from "react";
const Back = ({ color, ...props }) => (
  <svg
    width={36}
    height={17}
    viewBox="0 0 36 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.85059 15.1748L1.97559 8.45605M1.97559 8.45605L8.85059 1.7373M1.97559 8.45605H34.9756"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Back;
