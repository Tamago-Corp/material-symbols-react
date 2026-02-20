import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowLeftAlt = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" : "M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z")
    : (variant === 'filled' ? "m314-440 114 114q12 12 11.5 28T428-270q-12 12-28.5 12.5T371-269L188-452q-12-12-12-28t12-28l183-183q12-12 28.5-11.5T428-690q11 12 11.5 28T428-634L314-520h446q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H314Z" : "m314-440 114 114q12 12 11.5 28T428-270q-12 12-28.5 12.5T371-269L188-452q-12-12-12-28t12-28l183-183q12-12 28.5-11.5T428-690q11 12 11.5 28T428-634L314-520h446q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H314Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};