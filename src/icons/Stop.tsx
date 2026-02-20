import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Stop = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-240v-480h480v480H240Z" : "M320-640v320-320Zm-80 400v-480h480v480H240Zm80-80h320v-320H320v320Z")
    : (variant === 'filled' ? "M240-320v-320q0-33 23.5-56.5T320-720h320q33 0 56.5 23.5T720-640v320q0 33-23.5 56.5T640-240H320q-33 0-56.5-23.5T240-320Z" : "M240-320v-320q0-33 23.5-56.5T320-720h320q33 0 56.5 23.5T720-640v320q0 33-23.5 56.5T640-240H320q-33 0-56.5-23.5T240-320Zm80 0h320v-320H320v320Zm160-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};