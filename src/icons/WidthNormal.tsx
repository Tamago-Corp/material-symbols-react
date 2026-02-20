import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const WidthNormal = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h160v-480H160v480Zm480 0h160v-480H640v480Z" : "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-240 0v-480 480Z")
    : (variant === 'filled' ? "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h160v-480H160v480Zm480 0h160v-480H640v480Z" : "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-240 0v-480 480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};