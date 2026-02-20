import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ChromeMinimize = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160 896v-80h640v80H160Z" : "M160 896v-80h640v80H160Z")
    : (variant === 'filled' ? "M200 896q-17 0-28.5-11.5T160 856q0-17 11.5-28.5T200 816h560q17 0 28.5 11.5T800 856q0 17-11.5 28.5T760 896H200Z" : "M200 896q-17 0-28.5-11.5T160 856q0-17 11.5-28.5T200 816h560q17 0 28.5 11.5T800 856q0 17-11.5 28.5T760 896H200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};