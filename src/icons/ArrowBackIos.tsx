import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowBackIos = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" : "M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z")
    : (variant === 'filled' ? "m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z" : "m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};