import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TurnRight = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M280-160v-360q0-33 23.5-56.5T360-600h328l-64-64 56-56 160 160-160 160-56-56 64-64H360v360h-80Z" : "M280-160v-360q0-33 23.5-56.5T360-600h328l-64-64 56-56 160 160-160 160-56-56 64-64H360v360h-80Z")
    : (variant === 'filled' ? "M280-200v-320q0-33 23.5-56.5T360-600h328l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708-428q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36H360v320q0 17-11.5 28.5T320-160q-17 0-28.5-11.5T280-200Z" : "M280-200v-320q0-33 23.5-56.5T360-600h328l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708-428q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36H360v320q0 17-11.5 28.5T320-160q-17 0-28.5-11.5T280-200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};