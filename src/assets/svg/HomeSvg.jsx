import * as React from "react"
const HomeSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#000"
      strokeMiterlimit={10}
      d="M24.963 1.055a1 1 0 0 0-.578.209l-23 17.947a1 1 0 0 0 1.23 1.578L4 19.71V46a1 1 0 0 0 1 1h13.832a1 1 0 0 0 .326 0h11.674a1 1 0 0 0 .326 0H45a1 1 0 0 0 1-1V19.709l1.385 1.08a1 1 0 1 0 1.23-1.578L41 13.27V6h-6v2.586l-9.385-7.322a1 1 0 0 0-.652-.21zM25 3.322l19 14.826V45H32V26H18v19H6V18.148zM37 8h2v3.709l-2-1.563zM20 28h10v17H20z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(5.12)"
    />
  </svg>
)
export default HomeSvg