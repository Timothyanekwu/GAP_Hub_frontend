import * as React from "react";
const Bookmark = ({ color, ...props }) => (
  <svg
    width={19}
    height={23}
    viewBox="0 0 19 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.7921 1.76658C17.0296 1.91058 17.9375 2.97821 17.9375 4.22471V21.6543L9.5 17.4356L1.0625 21.6543V4.22471C1.0625 2.97821 1.96925 1.91058 3.20788 1.76658C7.38859 1.2813 11.6114 1.2813 15.7921 1.76658Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Bookmark;
