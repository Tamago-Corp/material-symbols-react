import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Minimize = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-120v-80h480v80H240Z" : "M240-120v-80h480v80H240Z")
    : (variant === 'filled' ? "M280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h400q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280Z" : "M280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h400q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};