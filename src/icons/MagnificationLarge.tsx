import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const MagnificationLarge = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-360h480v-320H200v320Zm-40 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" : "M200-360h480v-320H200v320Zm-40 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z")
    : (variant === 'filled' ? "M240-360h400q17 0 28.5-11.5T680-400v-240q0-17-11.5-28.5T640-680H240q-17 0-28.5 11.5T200-640v240q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" : "M240-360h400q17 0 28.5-11.5T680-400v-240q0-17-11.5-28.5T640-680H240q-17 0-28.5 11.5T200-640v240q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};