import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const PictureInPictureMedium = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm240-160v-320h400v320H320Z" : "M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm240-160v-320h400v320H320Z")
    : (variant === 'filled' ? "M360-320q-17 0-28.5-11.5T320-360v-240q0-17 11.5-28.5T360-640h320q17 0 28.5 11.5T720-600v240q0 17-11.5 28.5T680-320H360ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z" : "M360-320q-17 0-28.5-11.5T320-360v-240q0-17 11.5-28.5T360-640h320q17 0 28.5 11.5T720-600v240q0 17-11.5 28.5T680-320H360ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};