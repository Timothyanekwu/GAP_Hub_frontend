import * as React from "react";
const Search = ({ strokeWidth, color, ...props }) => (
  <svg
    width={33}
    height={31}
    viewBox="0 0 33 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.875 27.125L21.7291 20.4122M21.7291 20.4122C23.6631 18.5954 24.7497 16.1312 24.7497 13.5619C24.7497 10.9925 23.6631 8.52833 21.7291 6.7115C19.7951 4.89468 17.1719 3.87399 14.4368 3.87399C11.7016 3.87399 9.07852 4.89468 7.14448 6.7115C5.21043 8.52833 4.1239 10.9925 4.1239 13.5619C4.1239 16.1312 5.21043 18.5954 7.14448 20.4122C9.07852 22.229 11.7016 23.2497 14.4368 23.2497C17.1719 23.2497 19.7951 22.229 21.7291 20.4122Z"
      stroke={color}
      strokeWidth={strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Search;
