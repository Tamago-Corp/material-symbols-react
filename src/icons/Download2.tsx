import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Download2 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Z" : "M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z")
    : (variant === 'filled' ? "M200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160Zm280-105q-9 0-17.5-4T448-281L250-535q-15-20-4-42.5t36-22.5h78v-240q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v240h78q25 0 36 22.5t-4 42.5L512-281q-6 8-14.5 12t-17.5 4Z" : "M200-80q-17 0-28.5-11.5T160-120q0-17 11.5-28.5T200-160h560q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H200Zm280-185q-9 0-17.5-4T448-281L250-535q-15-20-4-42.5t36-22.5h78v-240q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v240h78q25 0 36 22.5t-4 42.5L512-281q-6 8-14.5 12t-17.5 4Zm0-105 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};