import type { SVGProps } from "react";

export const Chart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      // fill="#1C274C"
      d="M3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707C3.586 19 4.057 19 5 19c.943 0 1.414 0 1.707-.293C7 18.414 7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707C6.414 9 5.943 9 5 9c-.943 0-1.414 0-1.707.293Z"
    />
    <path
      // fill="#1C274C"
      d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293.943 0 1.414 0 1.707-.293C21 18.414 21 17.943 21 17V4c0-.943 0-1.414-.293-1.707C20.414 2 19.943 2 19 2c-.943 0-1.414 0-1.707.293Z"
      opacity={0.4}
    />
    <path
      // fill="#1C274C"
      d="M10 7c0-.943 0-1.414.293-1.707C10.586 5 11.057 5 12 5c.943 0 1.414 0 1.707.293C14 5.586 14 6.057 14 7v10c0 .943 0 1.414-.293 1.707C13.414 19 12.943 19 12 19c-.943 0-1.414 0-1.707-.293C10 18.414 10 17.943 10 17V7Z"
      opacity={0.7}
    />
    <path
      // fill="#1C274C"
      d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"
    />
  </svg>
);
