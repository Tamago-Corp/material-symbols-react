import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const WindowClosed = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-120v-720h640v720H160Zm120-400h160v-40h80v40h160v-200H280v200Zm0 280h400v-200H280v200Zm-40 40h480v-560H240v560Z" : "M160-120v-720h640v720H160Zm80-400h200v-40h80v40h200v-240H240v240Zm0 320h480v-240H240v240Zm0 0h480-480Z")
    : (variant === 'filled' ? "M280-240h400v-200H280v200Zm-40 120q-33 0-56.5-23.5T160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560q0 33-23.5 56.5T720-120H240Zm40-400h160v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h160v-200H280v200Zm-40 320h480v-560H240v560Z" : "M240-200h480v-240H240v240Zm0 80q-33 0-56.5-23.5T160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560q0 33-23.5 56.5T720-120H240Zm0-400h200v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h200v-240H240v240Zm0 320h480-480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};