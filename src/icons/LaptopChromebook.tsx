import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LaptopChromebook = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40Z" : "M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40ZM160-360h640v-400H160v400Zm320-200Z")
    : (variant === 'filled' ? "M80-240v-520q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v520h40q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h40Zm340 0h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6Z" : "M40-160q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h40v-520q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v520h40q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40Zm380-80h120q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6ZM160-360h640v-400H160v400Zm320-200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};