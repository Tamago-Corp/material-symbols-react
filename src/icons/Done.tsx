import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Done = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" : "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z")
    : (variant === 'filled' ? "m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" : "m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};