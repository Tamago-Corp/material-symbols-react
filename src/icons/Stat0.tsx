import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Stat0 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-200 200-480l280-280 280 280-280 280Z" : "M480-200 200-480l280-280 280 280-280 280Zm0-114 166-166-166-166-166 166 166 166Zm0-166Z")
    : (variant === 'filled' ? "M423-257 257-423q-12-12-18-27t-6-30q0-15 6-30t18-27l166-166q12-12 27-18t30-6q15 0 30 6t27 18l166 166q12 12 18 27t6 30q0 15-6 30t-18 27L537-257q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z" : "M423-257 257-423q-12-12-18-27t-6-30q0-15 6-30t18-27l166-166q12-12 27-18t30-6q15 0 30 6t27 18l166 166q12 12 18 27t6 30q0 15-6 30t-18 27L537-257q-12 12-27 18t-30 6q-15 0-30-6t-27-18Zm57-57 166-166-166-166-166 166 166 166Zm0-166Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};