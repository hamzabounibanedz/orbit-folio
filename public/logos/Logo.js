import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" aria-label="Orbit Folio" {...props}>
    <rect width="24" height="24" rx="5" fill="#524393" />
    <path d="M4 13l8-9 8 7-8 9zm8-4-3 4 3 2 4-4z" fill="white" fillRule="evenodd" />
  </svg>
);

export default SvgComponent;
