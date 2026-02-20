import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CheckIndeterminateSmall = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-440v-80h480v80H240Z" : "M240-440v-80h480v80H240Z")
    : (variant === 'filled' ? "M280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h400q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440H280Z" : "M280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h400q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440H280Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};