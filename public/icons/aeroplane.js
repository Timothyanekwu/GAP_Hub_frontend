import * as React from "react";
const Aeroplane = ({ fill, stroke, ...props }) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.64311 9.85107L0.912109 0.976074C7.44498 2.87607 13.6055 5.87753 19.1281 9.85107C13.6058 13.8245 7.44563 16.826 0.913109 18.7261L3.64311 9.85107ZM3.64311 9.85107H11.1431"
      stroke={stroke}
      fill={fill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Aeroplane;
