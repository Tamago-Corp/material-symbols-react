import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const MagnificationSmall = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-520h160v-160H200v160Zm-40 360q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" : "M200-520h160v-160H200v160Zm-40 360q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z")
    : (variant === 'filled' ? "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm120-360q33 0 56.5-23.5T360-600q0-33-23.5-56.5T280-680q-33 0-56.5 23.5T200-600q0 33 23.5 56.5T280-520Z" : "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm120-280q33 0 56.5-23.5T360-600q0-33-23.5-56.5T280-680q-33 0-56.5 23.5T200-600q0 33 23.5 56.5T280-520Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};