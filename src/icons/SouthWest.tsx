import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SouthWest = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" : "M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z")
    : (variant === 'filled' ? "M240-200q-17 0-28.5-11.5T200-240v-320q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560v224l436-436q11-11 28-11t28 11q11 11 11 28t-11 28L336-280h224q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H240Z" : "M240-200q-17 0-28.5-11.5T200-240v-320q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560v224l436-436q11-11 28-11t28 11q11 11 11 28t-11 28L336-280h224q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};