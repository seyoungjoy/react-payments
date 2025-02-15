import React from 'react';
import { SvgType } from '../../type/svg';

const ArrowIcon = ({ width, height, color }: SvgType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.3042 1L1.36469 8.78658L9.15127 15.7261"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ArrowIcon;
