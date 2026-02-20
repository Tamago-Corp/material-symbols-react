import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HorizontalRule = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-440v-80h640v80H160Z" : "M160-440v-80h640v80H160Z")
    : (variant === 'filled' ? "M200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h560q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H200Z" : "M200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h560q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};