import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Remove = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-440v-80h560v80H200Z" : "M200-440v-80h560v80H200Z")
    : (variant === 'filled' ? "M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z" : "M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};