import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const EMobiledata = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-280v-400h320v80H400v80h240v80H400v80h240v80H320Z" : "M320-280v-400h320v80H400v80h240v80H400v80h240v80H320Z")
    : (variant === 'filled' ? "M360-280q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H400v80h200q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H400v80h200q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360Z" : "M360-280q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H400v80h200q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H400v80h200q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};