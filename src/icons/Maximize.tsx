import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Maximize = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-760v-80h640v80H160Z" : "M160-760v-80h640v80H160Z")
    : (variant === 'filled' ? "M200-760q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h560q17 0 28.5 11.5T800-800q0 17-11.5 28.5T760-760H200Z" : "M200-760q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h560q17 0 28.5 11.5T800-800q0 17-11.5 28.5T760-760H200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};