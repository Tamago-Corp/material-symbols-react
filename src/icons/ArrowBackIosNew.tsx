import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowBackIosNew = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" : "M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z")
    : (variant === 'filled' ? "m382-480 294 294q15 15 14.5 35T675-116q-15 15-35 15t-35-15L297-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T676-844q15 15 15 35t-15 35L382-480Z" : "m382-480 294 294q15 15 14.5 35T675-116q-15 15-35 15t-35-15L297-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T676-844q15 15 15 35t-15 35L382-480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};