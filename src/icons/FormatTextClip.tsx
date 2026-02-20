import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const FormatTextClip = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-160v-640h80v640h-80Zm560 0v-280H320v-80h400v-280h80v640h-80Z" : "M160-160v-640h80v640h-80Zm560 0v-280H320v-80h400v-280h80v640h-80Z")
    : (variant === 'filled' ? "M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm560 0q-17 0-28.5-11.5T720-200v-240H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h360v-240q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160Z" : "M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm560 0q-17 0-28.5-11.5T720-200v-240H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h360v-240q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};