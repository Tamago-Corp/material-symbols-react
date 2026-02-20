import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const PictureInPictureSmall = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm320-160v-240h320v240H400Z" : "M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm320-160v-240h320v240H400Z")
    : (variant === 'filled' ? "M120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Zm320-160q-17 0-28.5-11.5T400-360v-160q0-17 11.5-28.5T440-560h240q17 0 28.5 11.5T720-520v160q0 17-11.5 28.5T680-320H440Z" : "M120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Zm320-160q-17 0-28.5-11.5T400-360v-160q0-17 11.5-28.5T440-560h240q17 0 28.5 11.5T720-520v160q0 17-11.5 28.5T680-320H440Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};