import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const NavigateBefore = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" : "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z")
    : (variant === 'filled' ? "m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z" : "m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};