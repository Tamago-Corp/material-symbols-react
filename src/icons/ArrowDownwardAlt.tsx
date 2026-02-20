import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowDownwardAlt = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" : "M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z")
    : (variant === 'filled' ? "M440-392v-328q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v328l116-116q11-11 28-11t28 11q11 11 11 28t-11 28L508-268q-12 12-28 12t-28-12L268-452q-11-11-11-28t11-28q11-11 28-11t28 11l116 116Z" : "M440-392v-328q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v328l116-116q11-11 28-11t28 11q11 11 11 28t-11 28L508-268q-12 12-28 12t-28-12L268-452q-11-11-11-28t11-28q11-11 28-11t28 11l116 116Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};