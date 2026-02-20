import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const West = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" : "M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z")
    : (variant === 'filled' ? "M233-440h607q17 0 28.5-11.5T880-480q0-17-11.5-28.5T840-520H233l155-156q11-11 11.5-27.5T388-732q-11-11-28-11t-28 11L108-508q-6 6-8.5 13T97-480q0 8 2.5 15t8.5 13l224 224q11 11 27.5 11t28.5-11q12-12 12-28.5T388-285L233-440Z" : "M233-440h607q17 0 28.5-11.5T880-480q0-17-11.5-28.5T840-520H233l155-156q11-11 11.5-27.5T388-732q-11-11-28-11t-28 11L108-508q-6 6-8.5 13T97-480q0 8 2.5 15t8.5 13l224 224q11 11 27.5 11t28.5-11q12-12 12-28.5T388-285L233-440Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};