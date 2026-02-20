import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowBack2 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M640-200 200-480l440-280v560Z" : "M640-200 200-480l440-280v560Zm-80-280Zm0 134v-268L350-480l210 134Z")
    : (variant === 'filled' ? "M253-446q-9-6-13.5-15t-4.5-19q0-10 4.5-19t13.5-15l326-207q5-3 10.5-4.5T600-727q16 0 28 11.5t12 28.5v414q0 17-12 28.5T600-233q-5 0-10.5-1.5T579-239L253-446Z" : "M253-446q-9-6-13.5-15t-4.5-19q0-10 4.5-19t13.5-15l326-207q5-3 10.5-4.5T600-727q16 0 28 11.5t12 28.5v414q0 17-12 28.5T600-233q-5 0-10.5-1.5T579-239L253-446Zm307-34Zm0 134v-268L350-480l210 134Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};